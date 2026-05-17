import { motion } from "framer-motion";

const destinations = [
  { name: "Meroë Pyramids", copy: "Ancient Nubian pyramids rising from golden desert sands.", big: true, glyph: "𓂀" },
  { name: "The Nile", copy: "The river that carries Sudan's history and rhythm.", glyph: "🌊" },
  { name: "Port Sudan", copy: "Red Sea diving, seafood, and coastal escapes.", glyph: "🐠" },
  { name: "Suakin", copy: "A historic island port with coral-stone ruins.", glyph: "🏛️" },
  { name: "Jebel Barkal", copy: "A sacred mountain connected to ancient Nubia.", glyph: "⛰️" },
  { name: "Nubian Villages", copy: "Color, warmth, riverside life, and timeless traditions.", big: true, glyph: "🏘️" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-[#120d09] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Destinations</p>
          <h2 className="serif max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Places that feel cinematic <span className="text-gold-gradient">before the camera appears.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`glass rounded-[2rem] p-6 transition ${d.big ? "md:col-span-2" : ""}`}
            >
              <div className="mb-16 text-5xl">{d.glyph}</div>
              <h3 className={`font-bold ${d.big ? "text-3xl" : "text-2xl"}`}>{d.name}</h3>
              <p className="mt-3 text-white/60">{d.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
