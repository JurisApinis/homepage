/**
 * Modules
 */
import { useEffect, useRef } from 'react';

/**
 * 
 * @description detect first component render.
 */
export default function useDetectFirstRender(): boolean {
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    return isFirstRender.current;
}
