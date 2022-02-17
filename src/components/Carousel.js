import React, { useState } from 'react';
import '../css/Carousel.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import  Item  from './Item';


const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
            <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <Item image={slide.image} name={slide.name} caption={slide.caption}/>
                        )}
                        
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;