/**
 * Modules
 */
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

/**
 * Styles
 */
import s from './MobileMenu.module.scss';
import navS from '../../NavBtn/NavBtn.module.scss';

/**
 * Components
 */
import Burger from '../Burger';
import Nav from '../../Nav';
import InlineLogo from '../../../../../common/assets/logo/InlineLogo';
import SocialLink from '../../../../../common/components/SocialLink';

/**
 * Icons
 */
import FBIcon from '../../../../../common/assets/icons/social/Facebook';
import InstaIcon from '../../../../../common/assets/icons/social/Instagram';
import YTIcon from '../../../../../common/assets/icons/social/Youtube';

/**
 * Types
 */
import type { T_Route } from '../../../../../types';

interface I_MobileMenu {
    routes: Array<T_Route>;
}

const MobileMenu: React.FC<I_MobileMenu> = ({ routes }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpened(false);
    }, [location]);

    useEffect(() => {
        if (isOpened) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isOpened]);

    const renderNavItem = (route: T_Route) => (
        <li key={route.path} className="my-4">
            <NavLink to={route.path}>
                {({ isActive }) => (
                    <span
                        className={cn([
                            navS.navBtn,
                            'text--heading-md flex ai-center jc-center',
                            isActive ? navS.active : navS.nonActive,
                        ])}
                    >
                        {route.name}
                    </span>
                )}
            </NavLink>
        </li>
    );

    return (
        <div>
            <Burger isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)} />

            <div className={cn('flex dir-col py-10 ai-center', s.menu, { [s.active]: isOpened })}>
                <div className="mb-10">
                    <InlineLogo />
                </div>

                <Nav routes={routes} renderItem={renderNavItem} extraClasses="dir-col" />

                <div className="flex ai-center mt-10" style={{ gap: 12 }}>
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
            </div>
        </div>
    );
};

export default MobileMenu;
