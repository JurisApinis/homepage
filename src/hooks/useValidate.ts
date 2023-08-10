/**
 * Modules
 */
import {useMemo} from 'react';

/**
 * Custom hooks
 */
import useFirstChange from './useFirstChange';
import useTranslations from './useTranslations';

type T_Arg = {
    deps: Array<any>;
    required: boolean;
    value: string;
    validators: Array<(val: string) => boolean>;
    errors: Array<string>;
};

/**
 * 
 * @param {Object}
 * @returns {Array}
 * 
 * @description provide validations for passed value. For validation use functions from param
 */
export default function useValidateErrors({value, required, validators, errors, deps}: T_Arg) {
    const isFirstChange = useFirstChange(value);
    const {t} = useTranslations();

    const innerErrors = useMemo(() => {
        const err: Array<string> = [];

        if (required && value.length === 0 && !isFirstChange) err.push(t('errors.requiredField'));

        validators.forEach((validator, i) => {
            const isValid = validator(value);
            if (isValid && !isFirstChange) {
                err.push(errors[i]);
            }
        });
        return err;
    }, deps);

    return innerErrors;
}
