/**
 * Modules
 */
import { useCallback, useContext, useMemo } from 'react';

/**
 * Custom hooks
 */
import useTranslations from '../../../../hooks/useTranslations';

/**
 * Constants
 */
import { FormContext } from '..';

/**
 * Components
 */
import Button from '../../Button';

export interface I_Submit {
    onSubmit: (...args: any) => boolean | Promise<boolean>;
    validators: Record<string, Array<(val: string) => boolean>>;
    extraClasses?: string;
}

const Submit: React.FC<Readonly<I_Submit>> = ({ onSubmit, validators, extraClasses = '' }) => {
    const context = useContext(FormContext);
    const { t } = useTranslations();

    const isValid = useMemo(() => {
        return Object.entries(validators).some(([key, validFn]) => validFn.every((fn) => !!context[key] && fn(context[key])));
    }, [validators, context]);

    const handleSubmit = useCallback(async () => {
        try {
            if (isValid) {
                const dataCopy = { ...context };
                delete dataCopy.dispatch;
                delete dataCopy.isInProgress;
                delete dataCopy.isSended;
    
                context.dispatch({ isInProgress: true });
    
                const success = await onSubmit(dataCopy);
    
                if (success) {
                    context.dispatch({ isInProgress: false, isSended: true });
    
                    setTimeout(() => {
                        Object.keys(dataCopy).forEach((key) => {
                            dataCopy[key] = '';
                        });
                        context.dispatch({ ...dataCopy, isInProgress: false, isSended: false });
                    }, 3000);
                } else {
                    context.dispatch({ isInProgress: false, isSended: false });
                }
            } else {
                console.error(new Error('Not valid contact form'));
            }
        } catch (error: any) {
            context.dispatch({ isInProgress: false, isSended: false, error: error.text || error.status || 'Unpredictable error' });
            setTimeout(() => {
                context.dispatch({ error: null });
            }, 3000);
        }
    }, [context]);

    return <Button innerText={t('common.send')} onClick={handleSubmit} extraClasses={extraClasses} />;
};

export default Submit;
