/**
 * Modules
 */
import Slider from 'nuka-carousel';

export interface I_Carousel<T> {
    data: Array<T>;
    slidesCount: number;
    renderSlide: (props: T, index: number) => React.ReactElement<Readonly<T>, React.FC>;
}

function Carousel<T>({
    data,
    slidesCount,
    renderSlide,
}: Readonly<I_Carousel<T>>): React.ReactElement<Readonly<I_Carousel<T>>, React.FC> {
    
    return (
        <Slider
            autoplay={true}
            autoplayInterval={2000}
            cellAlign="center"
            cellSpacing={10}
            slidesToScroll={slidesCount}
            slidesToShow={slidesCount}
            wrapAround={true}
            renderCenterRightControls={() => <span></span>}
            renderCenterLeftControls={() => <span></span>}
            renderBottomCenterControls={() => <span></span>}
        >
            {data.map(renderSlide)}
        </Slider>
    );
}

export default Carousel;
