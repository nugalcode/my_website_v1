import AnimatedPageSlow from "../components/AnimatedPageSlow"
import React from 'react';

const ParagraphTitleAnimated = ( { title } ) => {
    return (
        <AnimatedPageSlow>
            <div className="paragraphtitle"> {title} </div>
        </AnimatedPageSlow>
    )
}

export default ParagraphTitleAnimated;