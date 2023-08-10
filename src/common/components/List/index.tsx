/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import styles from './List.module.scss';

/**
 * Components
 */
import Text from '../Text';

export interface I_List {
    head?: string;
    list: Array<string>;
}

const List: React.FC<Readonly<I_List>> = ({ head = null, list }) => {
    
    return (
        <>
            {head ? <Text type="paragraph" text={head} textSize="heading-sm" extraClasses="pb-8" /> : null}
            <ul className={cn([styles.list, 'text--primary flex dir-col ai-center jc-sa nowrap'])}>
                {list.map((row, i) => (
                    <li key={`${row}-${i}`}>
                        <Text type="line" text={row} textSize="heading-sm" />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;
