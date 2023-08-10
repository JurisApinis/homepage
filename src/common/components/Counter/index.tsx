/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './Counter.module.scss';

export interface I_Counter {
    value: number;
}

const Counter: React.FC<Readonly<I_Counter>> = ({ value }) => {
    
    return (
        <div className={cn([s.wrapper])}>
            <span className={cn(['flex jc-center ai-center wid-100 h--full text--heading-sm text-white', s.childWrap])}>
                {value}
            </span>
        </div>
    );
};

export default Counter;
