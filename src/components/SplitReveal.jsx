import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";

export default function SplitReveal({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!ref.current) return;
    new SplitType(ref.current, { types: "words,chars" });
  }, []);

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.03, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.h2>
  );
}
