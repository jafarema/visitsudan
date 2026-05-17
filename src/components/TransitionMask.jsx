// TransitionMask.jsx
// A radial gold-ink mask whose center tracks scroll progress —
// acts as a soft wipe between major sections.

import { motion, useScroll, useTransform } from "framer-motion";

export default function TransitionMask() {
  const { scrollYProgress } = useScroll();
  const cx = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        background: `radial-gradient(circle at ${cx} 50%, transparent 0, transparent 8%, #08070A 12%)`,
      }}
      className="pointer-events-none fixed inset-0 z-[40] mix-blend-multiply opacity-30"
    />
  );
}
