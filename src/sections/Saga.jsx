// Saga.jsx
// Pinned scrollytelling: 4 chapters of Sudanese history rise out of
// dust as the user scrolls a 500vh-tall section. Each chapter title
// fades and blurs in/out.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SAGA = [
  { era: "3000 BC", title: "Kerma",         line: "Africa's first urban civilization rose by the Nile." },
  { era: "1500 BC", title: "Kush",          line: "A kingdom that once ruled Egypt itself." },
  { era: "300 BC",  title: "Meroë",         line: "Queens, pyramids, and gold beyond counting." },
  { era: "Today",   title: "Sudan, Untold", line: "The story continues, in markets and music and wind." },
];

function Chapter({ chapter, index, total, progress }) {
  const start = index / total;
  const end   = (index + 1) / total;

  const opacity = useTransform(progress,
    [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y       = useTransform(progress, [start, end], [80, -80]);
  const blur    = useTransform(progress,
    [start, start + 0.05, end - 0.05, end], [20, 0, 0, 20]);
  const filter  = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
    >
      <p className="eyebrow text-goldLight">{chapter.era}</p>
      <h3 className="mt-6 font-serif text-7xl leading-none tracking-[-0.04em] md:text-[16rem]">
        <span className="text-goldLight italic">{chapter.title}</span>
      </h3>
      <p className="mt-6 max-w-2xl text-2xl text-ivory/70 md:text-3xl">{chapter.line}</p>
    </motion.div>
  );
}

export default function Saga() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="saga" ref={ref} className="relative h-[500vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {SAGA.map((s, i) => (
          <Chapter key={s.title} chapter={s} index={i} total={SAGA.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
