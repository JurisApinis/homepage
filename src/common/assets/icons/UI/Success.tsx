/**
 * Modules
 */
import { useContext, useMemo, memo } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import { T_AppContext } from '../../../../types';

const Success: React.NamedExoticComponent = memo(() => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const colors = useMemo(() => {
        return {
            primary: themes[isDark ? 'dark' : 'light'].primary,
            secondary: themes[isDark ? 'dark' : 'light'].secondary,
        };
    }, [isDark]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_238_2438)">
                <circle cx="12" cy="12" r="11.5" stroke={colors.primary} />
                <path
                    d="M11.4887 18.7697L6.98877 9.26965L11.4887 11.2697L23.4886 -0.230322L11.4887 18.7697Z"
                    fill={colors.secondary}
                />
            </g>
            <defs>
                <clipPath id="clip0_238_2438">
                    <rect width="24" height="24" fill="none" />
                </clipPath>
            </defs>
        </svg>
    );
});

export default Success;
