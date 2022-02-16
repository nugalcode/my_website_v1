/* One singular slide of a carousel 
   consists of an image(png), name(text) and a caption(text)
 */

import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
//import { motion, AnimatePresence } from "framer-motion";


/*const animations = {
    initial: { opacity: 0, transition: { duration: 2 } },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 1 } },

}*/

const Item = ({ image, name, caption }) => {
    
    const [model, setModel] = useState(false);
    const [tempImageSrc, setTempImageSrc] = useState('');

    /* open the modal on IMG click */
    const getImg = (imageSrc) => {
        setTempImageSrc(imageSrc);
        setModel(true);
    }
    /* prevents Modal from closing when clicking on the content */
    const handleContentOnClick = (e) => {
        e.stopPropagation();
    };

    /* closing Modal when pressing Escape key */
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && model) {
            setModel(false);
        }
    },
        [setModel, model]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    });

    return (
        <>
            
            <div className={model ? "testModal open" : "testModal"} onClick={() => setModel(false)}>
               
                    <div className="testContentWrap" onClick={(e) => handleContentOnClick(e)}>
                        <div className="testModalImgWrap">
                            <img src={tempImageSrc} alt="modal_pic" />
                            <CloseIcon classname="closeIcon" onClick={() => setModel(!model)} />
                        </div>
                    </div>
               
                </div>
            

           
           
            <div className='item'>
                <img src={image} alt='travel' className="image" onClick={() => getImg(image)}/>
                <p className='hobbiesname'> {name} </p>
                <p className='caption'> {caption} </p>
            </div>
        </>
    );
};

export default Item;
