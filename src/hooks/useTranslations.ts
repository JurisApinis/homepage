import { useContext } from 'react';
import { AppContext } from '../App';
import { T_LangShort } from '../types';

export default function useTranslations() {
    const { translations, language, dispatch } = useContext(AppContext);

    const t = (key: string) => {
        let value = translations ? translations[language] : '';
        if (value !== '') {
            const keys = key.split('.');

            keys.forEach((k) => {
                value = value[k];
            });
        }

        return value;
    };

    const changeLanguage = (lang: T_LangShort) => {
        dispatch({ language: lang });
    };

    return { t, changeLanguage, language, translations };
}
