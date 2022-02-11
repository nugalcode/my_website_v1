import { MarfarePictures } from './MarfarePictures'
import React from 'react';
import Item from './Item';
import AnimatedPageCustom from "../components/AnimatedPageCustom";

export const Marfare = () => {

    return (
        <div id="scenesContainer">
            <div className="marfareScene">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item  image={MarfarePictures[0].image}
                        name={MarfarePictures[0].name}
                        caption={MarfarePictures[0].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>

            <div className="marfareScene">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item  image={MarfarePictures[1].image}
                        name={MarfarePictures[1].name}
                        caption={MarfarePictures[1].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="marfareScene">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <Item  image={MarfarePictures[2].image}
                        name={MarfarePictures[2].name}
                        caption={MarfarePictures[2].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="marfareScene">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <Item  image={MarfarePictures[3].image}
                        name={MarfarePictures[3].name}
                        caption={MarfarePictures[3].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>

            <div className="mouseWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, y: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, y: 500, transition: { duration: 0.5 } }}>
                    <Item image={MarfarePictures[4].image}
                        name={MarfarePictures[4].name}
                        caption={MarfarePictures[4].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="mouseWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item image={MarfarePictures[5].image}
                        name={MarfarePictures[5].name}
                        caption={MarfarePictures[5].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="mouseWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, y: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, y: 500, transition: { duration: 0.5 } }}>
                    <Item image={MarfarePictures[6].image}
                        name={MarfarePictures[6].name}
                        caption={MarfarePictures[6].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
            <div className="mouseWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <Item image={MarfarePictures[7].image}
                        name={MarfarePictures[7].name}
                        caption={MarfarePictures[7].caption}>
                    </Item>
                </AnimatedPageCustom>
            </div>
        </div>
    )

}