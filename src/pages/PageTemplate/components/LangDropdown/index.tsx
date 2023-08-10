/**
 * Modules
 */
import { useMemo, useState } from 'react';
import cn from 'classnames';

/**
 * Styles
 */
import s from './LangDropdown.module.scss';

/**
 * Constants
 */
import { LANGUAGES } from '../../../../constants/common';
import { LS_LANG_KEY } from '../../../../constants/localStorage';
import useTranslations from '../../../../hooks/useTranslations';

/**
 * Types
 */
import type { T_LangShort } from '../../../../types';

const LangDropdown: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { changeLanguage } = useTranslations();

    const handleSelect = (langShort: T_LangShort) => {
        localStorage.setItem(LS_LANG_KEY, langShort);
        setIsVisible(false);
        changeLanguage(langShort);
    };

    const selected = useMemo(() => {
        return LANGUAGES.find(
            (lang) => lang.langShort === (localStorage.getItem(LS_LANG_KEY) ?? process.env.REACT_APP_DEFAULT_LANG)
        );
    }, [isVisible === false]);

    return (
        <div className={s.wrapper}>
            <div className="flex jc-sb ai-center pointer" onClick={() => setIsVisible((prev) => !prev)}>
                {selected?.value}
                <span className={cn([s.arrow, { [s.active]: isVisible }])}></span>
            </div>
            {isVisible ? (
                <ul className={cn([s.list, 'pointer flex dir-col ai-center bg-counter-main-transparent'])}>
                    {LANGUAGES.map((lang) => {
                        return lang.langShort !== selected?.langShort ? (
                            <li
                                key={lang.id}
                                className={cn([s.listItem, 'flex ai-center jc-center wid-100'])}
                                onClick={() => handleSelect(lang.langShort)}
                            >
                                {lang.value}
                            </li>
                        ) : null;
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default LangDropdown;
