/**
 * Modules
 */
import { useEffect, useRef } from 'react';

/**
 * 
 * @param {String | Number | Boolean} val;
 * @description detect first value change.
 */
export default function useFirstChange(val: string | number | boolean): boolean {
    const value = useRef<string | number | boolean>(val);
    const isFirstType = useRef<boolean>(true);

    useEffect(() => {
        if (val !== value.current) {
            isFirstType.current = false;
        }
    }, [val]);

    return isFirstType.current;
}
