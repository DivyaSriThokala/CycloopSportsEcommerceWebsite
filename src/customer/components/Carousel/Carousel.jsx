import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCarouselData } from './ProductCarouselData';


const Carousel = () => {

    const items = ProductCarouselData.map((item) => <img className='cursor-pointer w-full h-[25rem] object-cover' role='presentation' src={item.image} alt="" />)
    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>

    )
}

export default Carousel;