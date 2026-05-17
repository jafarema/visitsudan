import { motion } from "framer-motion";
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";

const items = [
  { t: "Desert camping beneath the stars",  src: IMG.desertCamp },
  { t: "Nile sunsets and slow river rides", src: IMG.nileSunset },
  { t: "Ancient Nubia historical tours",    src: IMG.meroeHero },
  { t: "Red Sea diving and snorkeling",     src: IMG.redSeaPortSudan },
  { t: "Markets, textiles, crafts, and food", src: IMG.sudaneseMarket },
  { t: "Photography and village visits",    src: IMG.nubianVillage },
  { t: "Sudanese coffee and food rituals",  src: IMG.coffeeRitual },
  { t: "Cultural storytelling and music",   src: IMG.khartoumNile },
];

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-32">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Experiences</p>
      <h2 className="serif max-w-4xl text-5xl font-black md:text-7xl">
        Choose the journey <span className="text-gold-gradient">that moves you.</span>
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.a
            key={it.t}
            href="#plan"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ x: 6 }}
            className="group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-white/10 p-6 transition hover:border-gold/50"
          >
            {/* thumbnail */}
            <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src={it.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "saturate(1.05) brightness(0.85)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-ink/10 to-transparent" />
            </div>
            <span className="text-goldLight font-bold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold md:text-2xl">{it.t}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
