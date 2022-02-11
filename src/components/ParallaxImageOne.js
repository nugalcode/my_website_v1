import React from 'react';
import { Parallax } from 'react-parallax';
import TyrionAndDrogon from '../imgs/tyrion_drogon_wallpaper.jpg';
import Curry from '../imgs/curry_wallpaper_2.jpg';
import Yellowstone from '../imgs/yosemite_2.jpg';
import Jumbo from '../imgs/jumbo.JPG';

const ParallaxImageOne = () => {
    return (
        <>
            <Parallax className="parallaxImage" bgImage={TyrionAndDrogon} strength={700}>
                <div className="parallaxContent">
                    <span className="contentText">  Game of Thrones Geek </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                
            </div>

            <Parallax className="parallaxImage" bgImage={Curry} strength={700}>
                <div className="parallaxContent">
                    <span className="contentText"> Stephen Curry Inspired </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                
            </div>

            <Parallax className="parallaxImage" bgImage={Yellowstone} strength={700}>
                <div className="parallaxContent">
                    <span className="contentText"> Lover of Scenic Views </span>
                </div>
            </Parallax>

            <Parallax className="parallaxImage" bgImage={Jumbo} strength={700}>
                <div className="parallaxContent">
                    <span className="contentText"> Whisperer of Dogs </span>
                </div>
            </Parallax>
        </>
    );
}

export default ParallaxImageOne;