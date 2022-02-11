import React from 'react';
import Carousel from '../components/Carousel';
import { ShowsAndMoviesPictures } from '../components/ShowsAndMoviesPictures';
import { OutdoorPictures } from '../components/OutdoorPictures';
import SubtitleAnimated from "../components/SubtitleAnimated";
import BlockAnimated from "../components/BlockAnimated";
import AnimatedPageCustom from "../components/AnimatedPageCustom";

const Hobbies = () => {
    return (
        <div id="hobbies">
                <SubtitleAnimated subtitle="Hobbies & Interests" />
                <BlockAnimated />
                <div id="hobbieswrap">
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                        <div id="showscontainer">
                            <div className="hobby">
                            <div className="hobbysubtitlewrap"> Shows & Movies </div>
                            <BlockAnimated />
                            <Carousel slides={ShowsAndMoviesPictures} />
                            </div>
                            <div className="hobbyDescription">
                                In my free time I like to watch various shows and movies. Some of my
                                favorite shows are Game of Thrones, The Office, and Breaking Bad.
                                I am a big fan of movies about time, space, and/or both.
                                Interstellar, Arrival, and The Martian are at the top of this list.
                                I also like to immerse myself in lore-filled universes such as
                                Lord of the Rings, Dune, and Harry Potter. 
                                </div>
                        </div>
                    </AnimatedPageCustom>
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                        <div id="exercisescontainer">
                            <div className="hobbyDescription">
                                Other than watching shows and movies, I also enjoy walking
                                and hiking. Locally, I love walking on the Hayward Shoreline
                                at sunset, challenging myself to the top of Mission Peak, or taking a nice
                                stroll around the block. My favorite national parks
                                include Yellowstone, Yosemite, and Zion. 
                            </div>
                            <div className="hobby">
                                <div className="hobbysubtitlewrap"> Outdoor Sceneries </div>
                                <BlockAnimated />
                                <Carousel slides={OutdoorPictures} />
                            </div>
                        </div>
                    </AnimatedPageCustom>
                </div>
                    
           
        </div >
    );
}
export default Hobbies;
