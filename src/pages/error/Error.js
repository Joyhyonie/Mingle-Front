import { motion } from "framer-motion"

function Error() {

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <h1>🎃 404 Error 🎃</h1>
        </motion.div>
    );

}

export default Error;