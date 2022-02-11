import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, x: 500, transition: { duration: 1 } },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: -500, transition: { duration: 0.5 } },
    
}

const AnimatedPage = ({ children }) => {
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

export default AnimatedPage;