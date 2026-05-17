import { motion } from "framer-motion";

const scenes = [
  { label: "Meroë at sunrise", caption: "Where kingdoms still cast shadows.", big: true },
  { label: "Nile sunset", caption: "The river that carries a nation." },
  { label: "Red Sea coast", caption: "Blue silence at the desert edge." },
  { label: "Nubian village", caption: "Color, warmth, and home." },
  { label: "Coffee ritual", caption: "Hospitality, poured slowly." },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-32">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Gallery</p>
      <h2 className="serif text-5xl font-black md:text-7xl">Sudan <span className="text-gold-gradient">in scenes.</span></h2>

      <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-4">
        {scenes.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            whileHover={{ scale: 1.02 }}
            className={`glass relative overflow-hidden rounded-[2rem] p-6 ${
              s.big ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-nile/20" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-goldLight uppercase tracking-[0.3em] text-xs">{s.label}</p>
              <h3 className={`serif ${s.big ? "text-4xl" : "text-2xl"} leading-tight`}>{s.caption}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
