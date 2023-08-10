/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './FeedBackCard.module.scss';

/**
 * Components
 */
import Text from '../Text';
import StarsRate from '../StarsRate';

/**
 * Types
 */
import type { T_FeedBack } from '../../../types';

export interface I_FeedBackCard {
    feedback: T_FeedBack;
}

const FeedBackCard: React.FC<Readonly<I_FeedBackCard>> = ({ feedback }) => {
    
    return (
        <div className={cn('flex dir-col pa-5 text', s.card)}>
            <Text type="paragraph" text={feedback.name} />
            <Text type="paragraph" text={feedback.message} extraClasses="py-4" textSize="xs" />
            <StarsRate rate={feedback.rate} />
        </div>
    );
};

export default FeedBackCard;
