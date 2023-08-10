/**
 * Modules
 */
import { useContext, useMemo, memo } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../App';

/**
 * Types
 */
import { T_AppContext } from '../../../types';

const InlineLogo: React.FC = memo(() => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const color = useMemo(() => {
        return isDark ? themes.dark.white : themes.light.black;
    }, [isDark]);

    return (
        <svg
            id="Inline_logo"
            data-name="Inline logo"
            xmlns="http://www.w3.org/2000/svg"
            width="190"
            height="38"
            viewBox="0 0 190 38"
        >
            <g
                id="Rectangle_3"
                data-name="Rectangle 3"
                fill="none"
                stroke={color}
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <rect width="190" height="38" stroke="none" />
                <rect x="1" y="1" width="188" height="36" fill="none" />
            </g>
            <path
                id="Path_4"
                data-name="Path 4"
                d="M0,0H100V30H0A15.455,15.455,0,0,0,11.623,14.4C11.623,1.294,0,0,0,0Z"
                transform="translate(87 4)"
                fill="#e31f25"
            />
            <text
                id="MOTO"
                transform="translate(5 30.5)"
                fill={color}
                fontSize="30"
                fontFamily="'\.AppleSystemUIFont'"
                fontWeight="800"
            >
                <tspan x="0" y="0">
                    MOTO
                </tspan>
            </text>
            <text
                id="GURU"
                transform="translate(100 29.5)"
                fill="#fff"
                fontSize="30"
                fontFamily="'\.AppleSystemUIFont'"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    GURU
                </tspan>
            </text>
        </svg>
    );
});

export default InlineLogo;
