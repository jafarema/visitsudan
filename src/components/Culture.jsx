import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";

const pillars = [
  { t: "Hospitality",     d: "Tea, conversation, generosity — the part of Sudan travelers remember most.", src: IMG.coffeeRitual,   tone: "gold" },
  { t: "Coffee & tea",    d: "Rituals of welcome, patience, and presence.",                                  src: IMG.coffeeRitual,   tone: "gold" },
  { t: "Food",            d: "Ful, kisra, aseeda, stews, dates, and shared plates.",                         src: IMG.sudaneseMarket, tone: "red"  },
  { t: "Markets",         d: "Color, spices, textiles, crafts, and the rhythm of daily life.",               src: IMG.sudaneseMarket, tone: "red"  },
  { t: "Nubian design",   d: "Painted homes, doors, geometry, and riverside villages.",                      src: IMG.nubianVillage,  tone: "gold" },
  { t: "Music & rhythm",  d: "Memory, celebration, poetry, and identity in sound.",                          src: IMG.nubianVillage,  tone: "nile" },
];

export default function Culture() {
  return (
    <section id="culture" className="relative bg-[#0e0b08] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Culture</p>
        <h2 className="serif text-5xl font-black md:text-7xl">
          Come for the places. <span className="text-gold-gradient">Remember the people.</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <ImageCard src={p.src} eyebrow={p.t} title={p.d} tone={p.tone} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
