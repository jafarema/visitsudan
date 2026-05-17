import { motion } from "framer-motion";

const items = [
  "Desert camping beneath the stars",
  "Nile sunsets and slow river rides",
  "Ancient Nubia historical tours",
  "Red Sea diving and snorkeling",
  "Markets, textiles, crafts, and food",
  "Photography and village visits",
  "Sudanese coffee and food rituals",
  "Cultural storytelling and music",
];

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-32">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Experiences</p>
      <h2 className="serif max-w-4xl text-5xl font-black md:text-7xl">
        Choose the journey <span className="text-gold-gradient">that moves you.</span>
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ x: 6 }}
            className="flex items-center gap-6 rounded-3xl border border-white/10 p-6 hover:border-gold/50 transition"
          >
            <span className="text-goldLight font-bold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold md:text-2xl">{t}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
