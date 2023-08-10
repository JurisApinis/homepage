/**
 * Modules
 */
import { useContext } from 'react';
import cn from 'classnames';

/**
 * Styles
 */
import s from './ThemeSwitch.module.scss';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

const ThemeSwitch: React.FC = () => {
    const { isDark, dispatch } = useContext(AppContext);

    return (
        <label className={cn([s.switch, { 'bg-primary': isDark }, { [s.bordered]: !isDark }])} htmlFor="switch">
            <input
                id="switch"
                type="checkbox"
                style={{ display: 'none' }}
                checked={isDark}
                onChange={() => dispatch({ isDark: !isDark })}
            />
            <span className={cn([s.slider, { 'bg-primary': !isDark }, { 'bg-main': isDark }])}></span>
        </label>
    );
};

export default ThemeSwitch;
