/**
 * Modules
 */
import { memo, useContext } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import type { T_AppContext } from '../../../../types';

const Envelope: React.NamedExoticComponent = memo(() => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const color = themes[isDark ? 'dark' : 'light'].primary;

    return (
        <svg id="Envelope" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect id="Rectangle_8" data-name="Rectangle 8" width="24" height="24" fill="none" />
            <g
                id="Rectangle_7"
                data-name="Rectangle 7"
                transform="translate(0 3)"
                fill="none"
                stroke={color}
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <rect width="24" height="18" rx="2" stroke="none" />
                <rect x="1" y="1" width="22" height="16" rx="1" fill="none" />
            </g>
            <path
                id="Path_7"
                data-name="Path 7"
                d="M3034.11,144.175s9.029,8.807,10.887,8.813,11.291-9.137,11.291-9.137"
                transform="translate(-3033 -139)"
                fill="none"
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    );
});

export default Envelope;
