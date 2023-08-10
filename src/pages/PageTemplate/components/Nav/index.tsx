/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import styles from './Nav.module.scss';

import type { T_Route } from '../../../../types';

export interface I_Nav {
    routes: Array<T_Route>;
    renderItem: (route: T_Route) => React.ReactElement<any, 'li'>;
    extraClasses?: string;
}

const Nav: React.FC<Readonly<I_Nav>> = ({ routes, extraClasses, renderItem }) => {
    
    return <ul className={cn(['flex jc-sa ai-center', styles.nav, extraClasses])}>{routes.map(renderItem)}</ul>;
};

export default Nav;
