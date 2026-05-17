import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 12;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => setDone(true), 600);
      }
      setProgress(Math.floor(p));
    }, 120);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-end justify-between bg-ink px-10 pb-10"
        >
          <div className="serif text-[18vw] font-black leading-none tracking-tight">
            <span className="text-gold-gradient">{progress}</span>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.5em] text-goldLight">Visit Sudan</p>
            <p className="serif text-2xl">Loading the desert…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
