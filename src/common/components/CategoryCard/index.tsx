/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './CategoryCard.module.scss';

/**
 * Components
 */
import Text from '../Text';
export interface I_CategoryCard {
    width: '25' | '50' | '75' | '100' | '33' | '66';
    category: string;
    transport: string;
    border: 'left' | 'right' | 'none' | 'bottom';
}

const CategoryCard: React.FC<Readonly<I_CategoryCard>> = ({ width, category, transport, border }) => {
    
    return (
        <div
            className={cn(
                `flex dir-col pa-12 wid-${width} ai-center jc-sb`,
                { [s.borderRight]: border === 'right' },
                { [s.borderLeft]: border === 'left' },
                { [s.borderBottom]: border === 'bottom' }
            )}
        >
            <Text type="paragraph" text={category} textSize="title-md" />
            <Text type="paragraph" text={transport} extraClasses="my-3" textAlign="center" />
            <div className={s.separator}></div>
        </div>
    );
};

export default CategoryCard;
