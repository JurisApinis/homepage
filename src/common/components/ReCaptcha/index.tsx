/**
 * Modules
 */
import GoogleReCaptcha from 'react-google-recaptcha';
import { forwardRef, useContext } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../App';

/**
 * Types
 */
import type { ReCAPTCHAProps } from 'react-google-recaptcha';

interface I_ReCaptcha {
    onChange?: (token: string | null) => void;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    size?: 'compact' | 'normal' | 'invisible';
}

const ReCaptcha: React.ForwardRefExoticComponent<I_ReCaptcha & React.RefAttributes<any>> = forwardRef<any, I_ReCaptcha>(
    ({ onChange, badge = 'inline', size = 'normal' }, ref) => {
        const { isDark } = useContext(AppContext);
        const siteKey = import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY || '';
        const theme: ReCAPTCHAProps['theme'] = isDark ? 'dark' : 'light';

        return (
            <GoogleReCaptcha
                ref={ref as React.LegacyRef<any>}
                theme={theme}
                sitekey={siteKey}
                onChange={onChange}
                badge={badge}
                size={size as ReCAPTCHAProps['size']}
            />
        );
    }
);

export default ReCaptcha;
