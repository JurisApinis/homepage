/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './SocialLink.module.scss';

export interface I_SocialLink {
    href: string;
    children: React.ReactElement<{}>;
}

const SocialLink: React.FC<Readonly<I_SocialLink>> = ({ href, children }) => {
    
    return (
        <div className={cn([s.wrapper])}>
            <a href={href} target="_blank">
                <span className={cn(['flex jc-center ai-center wid-100 h--full', s.childWrap])}>{children}</span>
            </a>
        </div>
    );
};

export default SocialLink;
