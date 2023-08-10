/**
 * Modules
 */
import emailJS from '@emailjs/browser';

export default async function sendEmail<T extends Record<string, unknown> = Record<string, unknown>>(
    data: T & { option: string; 'g-recaptcha-response': string | null }
): Promise<boolean> {
    const key = import.meta.env.VITE_EMAIL_PUBLIC_KEY ?? '';
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID ?? '';
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID ?? '';

    try {
        if (!key || !templateId || !serviceId) {
            console.error('Missed email configuration');
            return false;
        }

        const response = await emailJS.send(
            serviceId,
            templateId,
            {
                ...data,
            },
            key
        );

        return response.status === 200;
    } catch (error) {
        throw error;
    }
}
