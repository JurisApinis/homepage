/**
 * Modules
 */
import { useContext, memo } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import type { T_AppContext } from '../../../../types';

const Phone: React.NamedExoticComponent = memo(() => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const color = themes[isDark ? 'dark' : 'light'].primary;

    return (
        <svg id="Phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24.012" viewBox="0 0 24 24.012">
            <rect
                id="Rectangle_10"
                data-name="Rectangle 10"
                width="24"
                height="24"
                transform="translate(0 0.012)"
                fill="none"
            />
            <path
                d="M20.43 6.168C20.43 12.886 13.889 24 8.20902 24C7.61058 24.0021 7.01887 23.8738 6.47502 23.624C6.35902 23.571 3.99902 22.409 3.99902 22.409L7.81502 15.049L10.215 16.227C11.762 16.971 15.61 9.319 14.171 8.547L11.734 7.347L13.6625 3.6735L15.591 0L17.973 1.176C19.597 2.022 20.43 3.749 20.43 6.168Z"
                fill={color}
            />
        </svg>
    );
});

export default Phone;
