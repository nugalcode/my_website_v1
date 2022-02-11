import React from 'react';
import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, x: 500, transition: { duration: 1.5 } },
    animate: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    exit: { opacity: 0, x: -500, transition: { duration: 0.5 } },

}
const BlockAnimated = () => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="blockdesignmain" />
        </motion.div>
    );
}
export default BlockAnimated