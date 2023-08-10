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

const Location: React.NamedExoticComponent = memo(() => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const color = themes[isDark ? 'dark' : 'light'].primary;

    return (
        <svg id="Location" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect id="Rectangle_9" data-name="Rectangle 9" width="24" height="24" fill="none" />
            <path
                id="1"
                d="M12,0C7.8,0,4,3.4,4,7.6s3.469,9.21,8,16.4c4.531-7.188,8-12.2,8-16.4S16.2,0,12,0Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,11Z"
                fill={color}
            />
        </svg>
    );
});

export default Location;
