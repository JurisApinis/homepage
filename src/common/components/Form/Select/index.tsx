/**
 * Modules
 */
import { useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

/**
 * Styles
 */
import s from './Select.module.scss';

/**
 * Constants
 */
import { FormContext } from '..';

/**
 * Custom hooks
 */
import useDetectFirstRender from '../../../../hooks/useDetectFirstRender';

export interface I_Select {
    data: Array<string>;
    dataKey: string;
    autoSelectFirst?: boolean;
    placeholder?: string;
}

const Select: React.FC<Readonly<I_Select>> = ({ data, dataKey, autoSelectFirst = false, placeholder = '' }) => {
    const context = useContext(FormContext);
    const firstRender = useDetectFirstRender();
    const selectRef = useRef<HTMLDivElement>(null);
    const [isListVisible, setIsListVisible] = useState<boolean>(false);

    const handleChange = (val: string) => {
        context.dispatch({ [dataKey]: val });
    };

    const toggleList = () => {
        setIsListVisible((prev) => !prev);
    };

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.dataset.item) handleChange(e.currentTarget.dataset.item);
        toggleList();
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (!(e.target as HTMLElement)?.contains(selectRef.current)) {
            setIsListVisible(false);
        }
    };

    useEffect(() => {
        if (firstRender && autoSelectFirst && data.length) {
            handleChange(data[0]);
        }
    }, [data]);

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return window.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={cn(s.wrapper, 'text--sm text-main')} ref={selectRef}>
            <div
                className={cn(s.selected, { [s.active]: context[dataKey].length > 0 })}
                onClick={() => setIsListVisible((prev) => !prev)}
            >
                <span>{context[dataKey].length ? context[dataKey] : placeholder}</span>
            </div>
            <div className={s.arrow}></div>
            {isListVisible && (
                <div className={s.list}>
                    {data.map((item, i) => (
                        <div key={`${i}-${item}`} className={s.listItem} onClick={handleSelect} data-item={item}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
