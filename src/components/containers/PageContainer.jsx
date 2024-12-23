import { motion } from "framer-motion";

export default function PageContainer({ children, key }) {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.2 }}
    // layout
    // key={key}
    >
      {children}
    </motion.div>
  );
}
