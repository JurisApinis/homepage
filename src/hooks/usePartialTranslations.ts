/**
 * Modules
 */
import { useMemo } from 'react';

/**
 * Custom hooks
 */
import useTranslations from './useTranslations';


/**
 * 
 * @param {Array} keys: Array with translation keys
 * @return {Object}
 * @description Return block of translations, passed in arguments.
 */
export default function usePartialTranslations(keys: Array<string>): Record<string, any> {
    const { translations, language } = useTranslations();

    const partialTranslations = useMemo(() => {
        let bundle = translations[language];
        if (bundle) {
            keys.forEach((key) => {
                bundle = bundle[key];
            });

            return bundle;
        } else {
            
            return {};
        }
    }, [keys, translations]);

    return partialTranslations;
}
