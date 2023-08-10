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

/**
 * Custom hooks
 */
import useTranslations from '../../../../hooks/useTranslations';

export interface I_EmptyView {}

const EmptyView: React.FC<Readonly<I_EmptyView>> = ({}) => {

    const { t } = useTranslations();
    
    return (
        <div
            className={cn([s.row, 'flex nowrap text--center border--primary', s.borderTop])}
        >
            <Text type="paragraph" text={t('categories.theory.table.empty')} textAlign="center" textSize="heading-md" extraClasses="wid-100 py-7" />
        </div>
    );
};

export default EmptyView;
