/**
 * Modules
 */
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

/**
 * Styles
 */
import styles from './NavBtn.module.scss';

import type { T_Route } from '../../../../types';

export interface I_NavBtn {
    route: T_Route;
}

const NavBtn: React.FC<Readonly<I_NavBtn>> = ({ route }) => {
    
    return (
        <NavLink to={route.path}>
            {({ isActive }) => (
                <span
                    className={cn([
                        styles.navBtn,
                        'text--sm flex ai-center jc-center',
                        isActive ? styles.active : styles.nonActive,
                    ])}
                >
                    {route.name}
                </span>
            )}
        </NavLink>
    );
};

export default NavBtn;
