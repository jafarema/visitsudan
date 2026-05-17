import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageCard from "./ImageCard";
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";

const list = [
  { name: "Meroë",          tag: "The Pyramids",         line: "Where kingdoms still cast shadows.",      src: IMG.meroeHero,      tone: "gold" },
  { name: "Khartoum",       tag: "Two Niles, One Heart", line: "Where the Blue and White Nile meet.",     src: IMG.khartoumNile,   tone: "nile" },
  { name: "Port Sudan",     tag: "The Red Sea",          line: "Blue silence at the edge of the desert.", src: IMG.redSeaPortSudan, tone: "nile" },
  { name: "Suakin",         tag: "Coral-Stone Island",   line: "A trading port written in salt and time.",src: IMG.redSeaPortSudan, tone: "red" },
  { name: "Jebel Barkal",   tag: "Sacred Mountain",      line: "Where Nubian gods once stood.",           src: IMG.jebelBarkal,    tone: "gold" },
  { name: "Nubian Villages",tag: "Color & Home",         line: "Painted walls, generous doors.",          src: IMG.nubianVillage,  tone: "gold" },
];

export default function HorizontalDestinations() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={ref} className="relative h-[400vh]" id="destinations">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#0c0907]">
        <motion.div style={{ x }} className="flex gap-8 px-10">
          <div className="flex w-screen flex-shrink-0 flex-col justify-center pl-10">
            <p className="text-sm font-bold uppercase tracking-[0.5em] text-gold">Destinations</p>
            <h2 className="serif mt-4 text-6xl font-black leading-[0.9] md:text-9xl">
              Places that feel <br /><span className="text-gold-gradient">cinematic.</span>
            </h2>
            <p className="mt-6 max-w-lg text-white/60">
              Scroll horizontally through Sudan's most unforgettable places — from the desert pyramids of Meroë to the coral coast of the Red Sea.
            </p>
          </div>

          {list.map((d, i) => (
            <div key={d.name} className="h-[80vh] w-[60vw] flex-shrink-0">
              <ImageCard
                src={d.src}
                eyebrow={d.tag}
                title={d.name}
                dek={d.line}
                index={i}
                total={list.length}
                tone={d.tone}
                big
                className="!min-h-0 h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
