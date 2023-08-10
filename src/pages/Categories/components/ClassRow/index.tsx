/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './ClassRow.module.scss';

/**
 * Components
 */
import Text from '../../../../common/components/Text';

export interface I_ClassRow {
    head?: boolean;
    item: {
        category: string;
        date: string;
        time: string;
        place: string;
    };
}

const ClassRow: React.FC<Readonly<I_ClassRow>> = ({ head = false, item }) => {
    
    return (
        <div
            className={cn([s.row, 'flex nowrap text--center', { 'border--primary': !head }, { [s.borderTop]: !head }])}
        >
            <div className="wid-25">
                <Text type="line" text={item.category} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.date} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.time} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.place} textSize={head ? 'heading-md' : 'sm'} />
            </div>
        </div>
    );
};

export default ClassRow;
