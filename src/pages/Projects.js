/* Projects page */
import React from 'react';
import { Marfare } from "../components/Marfare";
import { Movies } from "../components/Movies";
import SubtitleAnimated from "../components/SubtitleAnimated";
import BlockAnimated from "../components/BlockAnimated";
import AnimatedPageCustom from "../components/AnimatedPageCustom";
import '../css/Projects.css';

const Projects = () => {
    return (
        <div id="projects">
            
                <SubtitleAnimated subtitle="Projects" />
                <BlockAnimated />
                
            <div className="subProjectWrap">
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <div className="projectTitle"> The Marfare: An Original 2D Web Game </div>
                </AnimatedPageCustom>
                    <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                        animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                        <div className="marfareLinks">
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
            <div className="subProjectWrap">
                <AnimatedPageCustom initialParam={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: -500, transition: { duration: 0.5 } }}>
                    <div className="projectTitle"> Movies App using The Movie Database (TMDB) API </div>
                </AnimatedPageCustom>
                <AnimatedPageCustom initialParam={{ opacity: 0, x: 500, transition: { duration: 1 } }}
                    animateParam={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    exitParam={{ opacity: 0, x: 500, transition: { duration: 0.5 } }}>
                    <div className="marfareLinks">
                        <a href="https://github.com/nugalm/ECS_193_Project.git"
                            target="_blank" rel="noopener noreferrer">
                            Placeholder Link </a>
                    </div>
                    </AnimatedPageCustom>
                <Movies />
            </div>
            
        </div>
    );
}
export default Projects;