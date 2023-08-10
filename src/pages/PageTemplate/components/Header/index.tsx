/**
 * Modules
 */
import { useContext, useMemo } from 'react';
import cn from 'classnames';

/**
 * Styles
 */
import btnStyles from '../../../../common/components/Button/Button.module.scss';

/**
 * Components
 */
import LangDropdown from '../LangDropdown';
import SocialLink from '../../../../common/components/SocialLink';
import ThemeSwitch from '../ThemeSwitch';
import Nav from '../Nav';
import MobileMenu from './MobileMenu';
import NavBtn from '../NavBtn';

/**
 * Icons
 */
import FBIcon from '../../../../common/assets/icons/social/Facebook';
import InstaIcon from '../../../../common/assets/icons/social/Instagram';
import YTIcon from '../../../../common/assets/icons/social/Youtube';

/**
 * Custom hooks
 */
import useRoutes from '../../../../hooks/useRoutes';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import type { T_AppContext, T_Route } from '../../../../types';

interface I_Header {}

const Header: React.FC<Readonly<I_Header>> = ({}) => {
    const { breakPoint, isTranslationsLoaded } = useContext<T_AppContext>(AppContext);
    const routes = useRoutes([isTranslationsLoaded]);

    const burgerView = useMemo<boolean>(() => {
        return breakPoint === 'xs' || breakPoint === 'sm' || breakPoint === 'md';
    }, [breakPoint]);

    const renderNavItem = (route: T_Route) => (
        <li key={route.path}>
            <NavBtn route={route} />
        </li>
    );

    return (
        <div className="container">
            <header className="flex nowrap ai-center jc-sb py-3">
                {burgerView ? (
                    <>
                        <div className="flex ai-center" style={{ gap: 12 }}>
                            <ThemeSwitch />

                            <LangDropdown />
                        </div>

                        <MobileMenu routes={routes} />
                    </>
                ) : (
                    <>
                        <div className="flex ai-center" style={{ gap: 12 }}>
                            <SocialLink href={import.meta.env.VITE_FB_LINK as string}>
                                <FBIcon />
                            </SocialLink>

                            <SocialLink href={import.meta.env.VITE_INSTA_LINK as string}>
                                <InstaIcon />
                            </SocialLink>

                            <SocialLink href={import.meta.env.VITE_YT_LINK as string}>
                                <YTIcon />
                            </SocialLink>
                        </div>

                        <Nav routes={routes} renderItem={renderNavItem} />

                        <a
                            href={`tel:${import.meta.env.VITE_PHONE}`}
                            className={cn([btnStyles.btn, 'text--sm bg-primary bg-secondary--hover text-white'])}
                        >
                            {import.meta.env.VITE_PHONE}
                        </a>

                        <div className="flex ai-center" style={{ gap: 12 }}>
                            <ThemeSwitch />

                            <LangDropdown />
                        </div>
                    </>
                )}
            </header>
        </div>
    );
};

export default Header;
