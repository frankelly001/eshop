import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "../styles/eshopcarousel/eshopcarousel.css"

const EshopCarousel = () => {
    // const getConfigurableProps = () => ({
    //     showArrows: boolean('showArrows', true, tooglesGroupId),
    //     showStatus: boolean('showStatus', true, tooglesGroupId),
    //     showIndicators: boolean('showIndicators', true, tooglesGroupId),
    //     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    //     showThumbs: boolean('showThumbs', true, tooglesGroupId),
    //     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    //     autoPlay: boolean('autoPlay', true, tooglesGroupId),
    //     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    //     swipeable: boolean('swipeable', true, tooglesGroupId),
    //     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    //     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    //     autoFocus: boolean('autoFocus', false, tooglesGroupId),
    //     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    //     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    //     interval: number('interval', 2000, {}, valuesGroupId),
    //     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    //     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    //     ariaLabel: text('ariaLabel', undefined),
    // });swipeable={true} emulateTouch={true}

    const CarouselImages = [
        "eshopimages/carouselimage_1.jpg",
        "eshopimages/carouselimage_2.jpg",
        "eshopimages/carouselimage_3.jpg",
        "eshopimages/carouselimage_4.jpg",
        "eshopimages/carouselimage_5.jpg",
        "eshopimages/carouselimage_6.jpg",
        "eshopimages/carouselimage_7.jpg",
        "eshopimages/carouselimage_8.jpg"
    ]

    return (
        <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={false} dynamicHeight={true} showIndicators={true} animationHandler={"fade"} transitionTime={1000} interval={5000} swipeScrollTolerance={5} width="100%" autoFocus={true} useKeyboardArrows={true} swipeable={false} emulateTouch={true}>
            {CarouselImages.map((el, i) => 
            <div key={i} className="image">
                <img src={el} alt="" />
            </div>
                )}
        </Carousel>
    );
};

export default EshopCarousel;