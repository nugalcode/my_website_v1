import React from 'react';
import { Parallax, Background } from 'react-parallax';
import TyrionAndDrogon from '../imgs/tyrion_drogon_wallpaper.jpg';
import Curry from '../imgs/curry_wallpaper_2.jpg';
import Yellowstone from '../imgs/yosemite_2.jpg';
import Jumbo from '../imgs/jumbo.JPG';
import Me from '../imgs/grad_pic.jpg';
import '../css/Parallax.css'

const parallaxStrength = 500;

const ParallaxImageOne = () => {
    return (
        <>
            <Parallax className="parallaxImage" bgImage={Jumbo} strength={700}>
                <div className="parallaxContent">
                    <span className="contentText"> Welcome! </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                <span>
                    Hello and welcome! Yep, that's my old dog Jumbo.
                    You must be looking for my resume and projects-
                    they're in the projects tab. But while you're
                    here, feel free to look around!
                </span>
            </div>
            
            <Parallax className="parallaxImage" bgImage={TyrionAndDrogon} strength={parallaxStrength}>
                <div className="parallaxContent">
                    <span className="contentText">  Tyrion and Drogon </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                <span>
                    This is Tyrion and Drogon from the show Game of Thrones.
                    One of my favorite things to do is to sit down, relax, and enjoy great shows.
                    The world of Westeros is immersive and amazing, and one of my favorites.
                </span>
            </div>

            <Parallax className="parallaxImage" bgImage={Curry} strength={parallaxStrength}>
                <div className="parallaxContent">
                    <span className="contentText"> Stephen Curry Inspired </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                <span>
                    I am a huge follower of sports and e-sports. People like Stephen Curry,
                    the greatest shooter in the history of basketball, often leave me inspired. I try to emulate
                    their hard work and dedication to their craft.
                </span>
            </div>

            <Parallax className="parallaxImage" bgImage={Yellowstone} strength={parallaxStrength}>
                <div className="parallaxContent">
                    <span className="contentText"> Lover of Scenic Views </span>
                </div>
            </Parallax>

            <div className="betweenParallaxBox">
                <span>
                    I think there are few things, if any, more amazing than nature. I love
                    walking, jogging, and/or hiking, especially if it leads to amazing views.
                    Yosemite Falls, pictured here, is one of my favorite views.
                </span>
            </div>
            
        </>
    );
}

export default ParallaxImageOne;