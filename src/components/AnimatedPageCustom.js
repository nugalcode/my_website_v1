import { motion } from "framer-motion";

const AnimatedPageCustom = ({ children, initialParam, animateParam, exitParam }) => {
    const animations = {
        initial:  initialParam ,
        animate:  animateParam ,
        exit:  exitParam ,

    }
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPageCustom;