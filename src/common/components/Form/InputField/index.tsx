/**
 * Modules
 */
import { useCallback, useState, useContext } from 'react';
import cn from 'classnames';

/**
 * Styles
 */
import s from './InputField.module.scss';

/**
 * Constants
 */
import { FormContext } from '..';

/**
 * Custom hooks
 */
import useFirstChange from '../../../../hooks/useFirstChange';
import useValidateErrors from '../../../../hooks/useValidate';

export interface I_InputField {
    dataKey: string;
    placeholder?: string;
    required?: boolean;
    errors?: Array<string>;
    validators?: Array<(val: string) => boolean>;
}

const InputField: React.FC<Readonly<I_InputField>> = ({
    dataKey,
    placeholder,
    required = false,
    errors = [],
    validators = [],
}) => {
    const context = useContext(FormContext);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const firstType = useFirstChange(context[dataKey]);

    const handleFocus = useCallback(() => {
        setIsFocused((prev) => !prev);
    }, []);

    const innerErrors = useValidateErrors({
        value: context[dataKey],
        errors,
        validators,
        required,
        deps: [context[dataKey], errors, firstType, validators, required],
    });

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            context.dispatch({ [dataKey]: e.target.value });
        },
        [context.dispatch]
    );

    return (
        <div>
            <label className={s.label} htmlFor="input">
                <input
                    className={cn([
                        'text--sm text-main',
                        { [s.inputError]: innerErrors.length > 0 },
                        { [s.inputActive]: !isFocused && context[dataKey].length > 0 },
                        { [s.error]: innerErrors.length > 0 && !isFocused },
                        s.input,
                    ])}
                    type="text"
                    value={context[dataKey]}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                />
                {required && <span className={cn([s.required, 'error'])}>*</span>}
            </label>

            {innerErrors.length > 0 ? (
                <ul>
                    {innerErrors.map((err) => (
                        <li key={`err-${errors.indexOf(err)}`} className={cn('text--xxs mt-1', s.error)}>
                            {err}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default InputField;
