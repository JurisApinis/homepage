/**
 * Modules
 */
import { useEffect } from 'react';

/**
 * Helpers
 */
import calculateBreakPoint from '../helpers/calculateBreakPoint';

/**
 * Types
 */
import type { T_BreakPointsKeys } from '../types';

/**
 * 
 * @param {Function} storeNew 
 * @description Event listener to get and store breakpoint.
 */
export default function useBreakPoints(storeNew: (br: T_BreakPointsKeys) => void): void {
    const handleResize = () => {
        const result = calculateBreakPoint();
        storeNew(result);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
}

