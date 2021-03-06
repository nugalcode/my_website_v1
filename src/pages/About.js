/* About me page */
import React from 'react';
import '../css/About.css';
import GradPic from "../imgs/grad_pic.jpg";
import SubtitleAnimated from "../components/SubtitleAnimated";
import BlockAnimated from "../components/BlockAnimated";
import AnimatedPageCustom from "../components/AnimatedPageCustom";
import ParagraphTitleAnimated from "../components/ParagraphTitleAnimated";

const enterAnimateDuration = 1.3;
const About = () => {
    return (
        <div id="about">
                <div className="subtitleContainer">
                <SubtitleAnimated subtitle="About" />
                    <BlockAnimated />
            </div>
                <div id="aboutsubcontainer">
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                        <div id="gradpicwrap">
                            <img id="gradpic" src={GradPic} alt='my_pic' className='image' />
                            </div>
                </AnimatedPageCustom>
               
                <div id="paragraphwrap">
                        <ParagraphTitleAnimated title="General Facts About Me" />
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: enterAnimateDuration } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: enterAnimateDuration } }}
                            exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                            
                            <div className="paragraph"> 
                                My name is Jed Mandy Nugal. My family left the Philippines and came to the United States when I was six years old.
                            I was raised in the Bay Area with my five siblings. I graduated from UC Davis in 2020 with a B.S. in Computer Science and Engineering.
                            Currently I am looking for opportunities to be a front-end web developer.

                        </div>
                    </AnimatedPageCustom>
                    <ParagraphTitleAnimated title="My Coding Journey" />
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: enterAnimateDuration } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: enterAnimateDuration } }}
                        exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                            <div className="paragraph">
                                My coding journey began at UC Davis in 2016 when I was accepted as a Computer Science and Engineering major.
                                I had no prior experience in coding or computer science. I applied to the major simply because I liked to surf the web
                                and play video games. It wasn't until my senior year that I felt passionate about coding.
                                For my senior project, my team and I created an original web game called The Marfare.
                                I loved everything about it: planning, designing, and implementing the project with my peers was an amazing and rewarding experience.
                                I truly enjoyed working with my teammates. The teamwork and friendliness we had are what I hope to find in future teams.
                            </div>
                            <div className="paragraph">
                                After college, the combination of months of studying, interviews, and the circumstances of a global pandemic led me to an extended break from coding.
                                I decided the best thing for me was to mentally reset and reconsider my options, and to take my time in doing so.
                                After careful consideration I decided to create this website, and I quickly rediscovered my passion for planning and creating.
                                I found out that I truly enjoy working with html, css, and javascript.
                                Currently, I am enjoying teaching myself React using online documentation and videos.
                            I have just finished my first version of a movie app, which uses a third-party API to display movies and their details. As I finalize
                            my ideas for my next project, I am also frequently reading online blogs, tutorials, and videos to learn as much as I can about front-end
                            web development.
                          
                        </div>
                    </AnimatedPageCustom>
                        </div>
                   
                </div>
            
        </div>
    );
}
export default About;