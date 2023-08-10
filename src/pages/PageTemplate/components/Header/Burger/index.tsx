/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './Burger.module.scss';

export interface I_Burger {
    isOpened: boolean;
    onClick: () => void;
}

const Burger: React.FC<Readonly<I_Burger>> = ({ isOpened, onClick }) => {
    
    return (
        <div onClick={onClick} className={cn(s.burger, { [s.active]: isOpened })}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;
