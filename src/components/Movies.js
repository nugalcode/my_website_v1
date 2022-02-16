import { MoviesPictures } from './MoviesPictures'
import React from 'react';
import Item from './Item';
import AnimatedPageCustom from "../components/AnimatedPageCustom";

export const Movies = () => {

    return (
        <div className="scenesContainer">
            <div className="projectPicWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item image={MoviesPictures[0].image}
                        name={MoviesPictures[0].name}
                        caption={MoviesPictures[0].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="projectPicWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item image={MoviesPictures[1].image}
                        name={MoviesPictures[1].name}
                        caption={MoviesPictures[1].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>

            <div className="projectPicWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <Item image={MoviesPictures[2].image}
                        name={MoviesPictures[2].name}
                        caption={MoviesPictures[2].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="projectPicWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <Item image={MoviesPictures[3].image}
                        name={MoviesPictures[3].name}
                        caption={MoviesPictures[3].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>

        </div>
    )
}

