/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './Button.module.scss';

interface I_Button {
    innerText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    extraClasses?: string;
}

const Button: React.FC<Readonly<I_Button>> = ({ innerText, onClick, extraClasses = '' }) => {
    
    return (
        <button
            className={cn([s.btn, 'text--sm text bg-primary bg-secondary--hover text-white', extraClasses])}
            onClick={onClick}
        >
            {innerText}
        </button>
    );
};

export default Button;
