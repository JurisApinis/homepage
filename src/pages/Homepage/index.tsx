/**
 * Modules
 */
import { useCallback, useContext, useMemo } from 'react';

/**
 * Components
 */
import FullLogo from '../../common/assets/logo/FullLogo';
import OverlayBackground from '../../common/components/OverlayBackground';
import Text from '../../common/components/Text';
import IntroText from '../../common/components/IntroText';
import FeatureCard from './components/FeatureCard';
import CategoryCard from '../../common/components/CategoryCard';
import Carousel from '../../common/components/Carousel';
import FeedBackCard from '../../common/components/FeedBackCard';
import Loader from '../../common/components/Loader';

/**
 * Custom hooks
 */
import useGetImages from '../../hooks/useGetImages';
import useQuery from '../../hooks/useQuery';
import usePartialTranslations from '../../hooks/usePartialTranslations';
import useTranslations from '../../hooks/useTranslations';

/**
 * Helpers
 */
import feedbacksAdapter from '../../adapters/feedbacksAdapter';

/**
 * Constants
 */
import { IMAGES_NAMES } from '../../constants/common';
import { AppContext } from '../../App';

/**
 * Types
 */
import type { T_AppContext, T_FeedBack } from '../../types';
import type { I_CategoryCard } from '../../common/components/CategoryCard';
import type { I_FeatureCard } from './components/FeatureCard';

type T_ResponsiveValues = {
    slidesCount: number;
    featureCardWidth: I_FeatureCard['width'];
    categoryCardWidth: I_CategoryCard['width'];
};

const HomePage: React.FC = () => {
    const { t } = useTranslations();
    const features = usePartialTranslations(['homepage', 'features']);
    const categories = usePartialTranslations(['homepage', 'categories', 'list']);
    const feedbacks = useQuery<Array<T_FeedBack>>('feedbacks', feedbacksAdapter);
    const images = useGetImages([
        IMAGES_NAMES.HOMEINTRO,
        IMAGES_NAMES.FEATURE1,
        IMAGES_NAMES.FEATURE2,
        IMAGES_NAMES.FEATURE3,
        IMAGES_NAMES.FEATURE4,
    ]);

    const { breakPoint } = useContext<T_AppContext>(AppContext);

    const responsiveValues = useMemo<T_ResponsiveValues>(() => {
        switch (breakPoint) {
            case 'xs':
            case 'sm':
                return {
                    featureCardWidth: '100',
                    categoryCardWidth: '100',
                    slidesCount: 1,
                };
            case 'md':
                return {
                    featureCardWidth: '50',
                    categoryCardWidth: '50',
                    slidesCount: 2,
                };
            case 'lg':
                return {
                    featureCardWidth: '25',
                    categoryCardWidth: '25',
                    slidesCount: 3,
                };
            case 'xl':
                return {
                    featureCardWidth: '25',
                    categoryCardWidth: '25',
                    slidesCount: 4,
                };
        }
    }, [breakPoint]);

    const categoryBorders = useCallback(
        (index: number) => {
            const isLast = index === Object.keys(categories).length - 1;
            if (breakPoint === 'xs') return isLast ? 'none' : 'bottom';
            if (breakPoint === 'sm') return isLast ? 'none' : 'bottom';
            if (breakPoint === 'md') return index % 2 === 0 && !isLast ? 'right' : 'none';
            return isLast ? 'none' : 'right';
        },
        [breakPoint]
    );

    return (
        <section>
            <OverlayBackground imgSrc={images?.homeIntro ?? ''}>
                <div className="flex dir-col jc-center ai-center h--full" style={{ minHeight: 633 }}>
                    <FullLogo />
                    <Text type={'paragraph'} text={t('homepage.banner.title')} textAlign="center" textSize="title-xl" />
                    <Text
                        type={'paragraph'}
                        text={t('homepage.banner.subHeading')}
                        textAlign="center"
                        textSize="heading-xl"
                    />
                </div>
            </OverlayBackground>

            <IntroText heading={t('homepage.about.heading')}>
                <Text type="paragraph" text={t('homepage.about.paragraphOne')} textAlign="center" extraClasses="mb-6" />
                <Text type="paragraph" text={t('homepage.about.paragraphTwo')} textAlign="center" />
            </IntroText>

            <div className="flex jc-center ai-center">
                {Object.values(features).map((f, i) => (
                    <FeatureCard
                        key={`feature-${i}`}
                        width={responsiveValues.featureCardWidth}
                        count={i + 1}
                        text={f.text}
                        btnValue={f.btnValue}
                        bgSrc={images ? (images[`feature${i + 1}` as IMAGES_NAMES] as string) : ''}
                        onClick={() => console.log(f.text + ' ' + i)}
                    />
                ))}
            </div>

            <IntroText heading={t('homepage.categories.heading')}>
                <Text type="paragraph" text={t('homepage.categories.text')} textAlign="center" extraClasses="mb-6" />
            </IntroText>

            <div className="flex jc-center ai-center pb-12">
                {Object.values(categories).map((c, i) => (
                    <CategoryCard
                        width={responsiveValues.categoryCardWidth}
                        key={c.heading}
                        category={c.heading}
                        transport={c.text}
                        border={categoryBorders(i)}
                    />
                ))}
            </div>

            <div className="mt-10">
                {feedbacks ? (
                    <Carousel<T_FeedBack>
                        data={feedbacks as Array<T_FeedBack>}
                        slidesCount={responsiveValues.slidesCount}
                        renderSlide={(f) => <FeedBackCard key={f.id} feedback={f} />}
                    />
                ) : (
                    <div className="flex jc-center">
                        <Loader />
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomePage;
