import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const chapters = [
  { era: "3000 BC", title: "The Kingdom of Kush", line: "Before empires had names, Sudan was already ancient." },
  { era: "2500 BC", title: "Kerma rises", line: "A civilization born from the river, written in gold." },
  { era: "300 BC", title: "Meroë awakens", line: "Pyramids climb the desert. Queens rule the sand." },
  { era: "Today", title: "Sudan, Untold", line: "The story continues — in markets, music, and the wind." },
];

export default function StoryChapters() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-ink">
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,164,65,0.18),transparent_60%)]" />
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-goldLight">A History Older Than Memory</p>
          <div className="mt-8 grid gap-12">
            {chapters.map((c, i) => {
              const inRange = useTransform(scrollYProgress, [i / 4, (i + 0.4) / 4, (i + 0.9) / 4, (i + 1) / 4], [0, 1, 1, 0]);
              const yMove = useTransform(scrollYProgress, [i / 4, (i + 1) / 4], [60, -60]);
              return (
                <motion.div key={c.title} style={{ opacity: inRange, y: yMove }} className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-sm uppercase tracking-[0.5em] text-gold">{c.era}</p>
                  <h3 className="serif mt-6 text-6xl font-black md:text-9xl">
                    <span className="text-gold-gradient">{c.title}</span>
                  </h3>
                  <p className="serif mt-6 max-w-2xl text-2xl text-white/75 md:text-3xl">{c.line}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
