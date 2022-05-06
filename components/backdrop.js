import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {

    return (
        <motion.div style={{backgroundColor:'#000000e1'}}
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;