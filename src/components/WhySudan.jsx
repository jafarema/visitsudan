import { motion } from "framer-motion";

const cards = [
  { title: "Ancient kingdoms", copy: "Walk through Meroë, Jebel Barkal, and the remains of civilizations that shaped African history." },
  { title: "The Nile", copy: "Follow the river through cities, farms, villages, sunsets, and stories that still define daily life." },
  { title: "Red Sea coast", copy: "Explore Port Sudan, Suakin, coral reefs, diving routes, seafood, and coastal culture." },
  { title: "Desert journeys", copy: "Camp beneath clear skies, cross golden sands, and experience the silence of the Sahara." },
  { title: "Living culture", copy: "Discover coffee rituals, markets, textiles, music, food, villages, and Sudanese generosity." },
  { title: "Untouched adventure", copy: "Travel somewhere raw, real, spacious, and deeply memorable." },
];

export default function WhySudan() {
  return (
    <section id="why" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Why Sudan</p>
        <h2 className="serif text-5xl font-black leading-tight md:text-7xl">
          A destination hidden <span className="text-gold-gradient">in plain sight.</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/65">
          Sudan is a place of contrasts: ancient kingdoms and living traditions, golden desert and flowing Nile,
          quiet ruins and loud markets, Red Sea coral and Nubian hospitality.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            whileHover={{ y: -8, borderColor: "rgba(217,164,65,.55)" }}
            className="glass rounded-[2rem] p-8 transition"
          >
            <h3 className="text-2xl font-bold text-goldLight">{c.title}</h3>
            <p className="mt-4 text-white/65 leading-7">{c.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
