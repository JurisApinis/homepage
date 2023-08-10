/**
 * Modules
 */
import cn from 'classnames';

/**
 * Styles
 */
import s from './FeatureCard.module.scss';

/**
 * Components
 */
import OverlayBackground from '../../../../common/components/OverlayBackground';
import Text from '../../../../common/components/Text';
import Button from '../../../../common/components/Button';
import Counter from '../../../../common/components/Counter';

export interface I_FeatureCard {
    width: '25' | '50' | '75' | '100' | '33' | '66';
    count: number;
    bgSrc: string;
    text: string;
    btnValue: string;
    onClick: (...args: any) => void;
}

const FeatureCard: React.FC<Readonly<I_FeatureCard>> = ({ width, count, bgSrc, text, btnValue, onClick }) => {
    
    return (
        <div className={cn(`wid-${width}`, s.card)}>
            <OverlayBackground imgSrc={bgSrc}>
                <div className={cn('flex dir-col ai-center jc-sa', s.cardContent)}>
                    <Counter value={count} />
                    <Text type="paragraph" textColor="white" text={text} textSize="heading-md" textAlign="center" />
                    <div style={{ width: 188 }} className="text--center">
                        <Button innerText={btnValue} onClick={onClick} />
                    </div>
                </div>
            </OverlayBackground>
        </div>
    );
};

export default FeatureCard;
