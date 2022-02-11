/* Projects page */
import React from 'react';
import { Marfare } from "../components/Marfare";
import SubtitleAnimated from "../components/SubtitleAnimated";
import BlockAnimated from "../components/BlockAnimated";
import AnimatedPageCustom from "../components/AnimatedPageCustom";

const Projects = () => {
    return (
        <div id="projects">
            
                <SubtitleAnimated subtitle="Projects" />
                <BlockAnimated />
                
                <div id="themarfare">
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    The Marfare: An Original 2D Web Game
                </AnimatedPageCustom>
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                        <div id="marfareLinks">
                            <a href="https://github.com/nugalm/ECS_193_Project.git"
                                target="_blank" rel="noopener noreferrer">
                                Github </a>
                            <a href="https://docs.google.com/document/d/1CMreVQ3VCu-rIhICe1iwfcoPJGofpVOAXTz8djX8rj8/edit?usp=sharing"
                            target="_blank" rel="noopener noreferrer">
                                    User & Developer Guide </a>
                            </div>
                    </AnimatedPageCustom>
                    <Marfare />
                </div>

            
        </div>
    );
}
export default Projects;