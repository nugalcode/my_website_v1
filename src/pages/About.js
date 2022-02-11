/* About me page */
import React from 'react';
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
                        <ParagraphTitleAnimated title="Introduction" />
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: enterAnimateDuration } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: enterAnimateDuration } }}
                            exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                            
                            <div className="paragraph"> 
                                My name is Jed Mandy Nugal. I'm the youngest of six siblings. My family left the Philippines and came to the United States when I was six years old.
                                I was raised in Hayward, California.

                        </div>
                    </AnimatedPageCustom>
                    <ParagraphTitleAnimated title="My Coding Journey" />
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: enterAnimateDuration } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: enterAnimateDuration } }}
                        exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                            <div className="paragraph">
                                My coding journey began at UC Davis in 2016 when I was accepted as a Computer Science and Engineering major.
                                I had no prior experience in coding or computer science. I applied to the major simply because I liked to surf the web
                                and play video games. Throughout most of college I found computer science interesting,
                                but I was never truly passionate about it. It wasn't until my senior year that I felt excited to code.
                                For my senior project, my team and I created an original web game called The Marfare.
                                I loved everything about it: planning, designing, and implementing the project with my peers was an amazing and rewarding experience.
                                I truly enjoyed working with my teammates. The teamwork and friendliness we had is something I hope to find in future teams.
                            </div>
                            <div className="paragraph">
                                After college, I studied for hours almost every day from the summer of 2020 to the start of 2021.
                                My browser tabs included LeetCode questions, interview questions, and general computer science topics.
                                However, studying like this combined with the circumstances caused by Covid-19, I quickly became burnt out.
                                I questioned why I enjoyed coding in the first place and decided to take an extended break.
                                I gave myself until the start of 2022 to reset and consider several future options, which included going back to
                                school for nursing, doing data analysis, going back for a master's degree, and much more.
                            </div>
                            <div className="paragraph">
                                After careful consideration I decided to create this website, and I quickly rediscovered my passion for planning and creating.
                                I found out that I truly enjoy working with html, css, and javascript.
                                Currently, I am teaching myself React using online documentation and videos.
                                I am working on a personal project using React and Spotify API,
                                which will be linked in the Projects page when I am finished. 
                        </div>
                    </AnimatedPageCustom>
                        </div>
                   
                </div>
            
        </div>
    );
}
export default About;