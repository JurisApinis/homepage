/**
 * Modules
 */
import cn from 'classnames';
import { memo } from 'react';

/**
 * Styles
 */
import s from './Loader.module.scss';

/**
 * Icons
 */
import Gear from '../../assets/icons/UI/Gear';

const Loader: React.NamedExoticComponent = memo(() => {
    return (
        <div className={s.wrapper}>
            <div className={cn(s.central, s.rotate)}>
                <Gear barCount={12} gearColor={'primary'} />
            </div>

            <div className={cn(s.right, s.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>

            <div className={cn(s.small, s.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>

            <div className={cn(s.left, s.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>
        </div>
    );
});

export default Loader;
