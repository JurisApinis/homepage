/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './HeaderWithText.module.scss';

/**
 * Components
 */
import Text from '../Text';

export interface I_HeaderWithText {
    heading: string;
    children?: JSX.Element | Array<JSX.Element>;
}

const HeaderWithText: React.FC<Readonly<I_HeaderWithText>> = ({ heading, children }) => {
    
    return (
        <div className="container flex ai-center dir-col py-12 text--center">
            <Text type="paragraph" textSize="title-sm" textAlign="center" text={heading} />
            <div className={cn([s.separator, 'my-3'])}></div>
            {children}
        </div>
    );
};

export default HeaderWithText;
