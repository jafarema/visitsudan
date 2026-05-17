import { motion } from "framer-motion";

export default function Curtain() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
      className="fixed inset-0 z-[150] origin-top gold-gradient"
    />
  );
}
