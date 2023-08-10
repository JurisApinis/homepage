/**
 * Modules
 */
import cn from 'classnames';
import { useContext } from 'react';

/**
 * Styles
 */
import s from './PageLoading.module.scss';

/**
 * Components
 */
import LogoFrame from '../../../../common/assets/logo/SplittedLogo/LogoFrame';
import LogoBike from '../../../../common/assets/logo/SplittedLogo/LogoBike';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import type { T_AppContext } from '../../../../types';

const PageLoading: React.FC = () => {
    const { isDark } = useContext<T_AppContext>(AppContext);

    return (
        <div className={cn('flex ai-center jc-center', s.wrapper)}>
            <LogoFrame isDark={isDark} />
            <div className={s.bike}>
                <LogoBike isDark={isDark} />
            </div>
            <div className={s.name}>
                <div>
                    <span className={cn(s.letter, `text-${isDark ? 'black' : 'white'}`)}>M</span>
                    <span className={cn(s.letter, `text-${isDark ? 'black' : 'white'}`)}>O</span>
                    <span className={cn(s.letter, `text-${isDark ? 'black' : 'white'}`)}>T</span>
                    <span className={cn(s.letter, `text-${isDark ? 'black' : 'white'}`)}>O</span>
                </div>
                <div>
                    <span className={s.letter}>G</span>
                    <span className={s.letter}>U</span>
                    <span className={s.letter}>R</span>
                    <span className={s.letter}>U</span>
                </div>
            </div>
        </div>
    );
};

export default PageLoading;
