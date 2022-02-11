import React from 'react';
import AnimatedPageFast from "../components/AnimatedPageFast"

const SubtitleAnimated = ({ subtitle }) => {
    return (
        <AnimatedPageFast>
            <div id="subtitle"> {subtitle} </div>
        </AnimatedPageFast>
    );
}

export default SubtitleAnimated;