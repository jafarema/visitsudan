import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="plan" className="px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="gold-gradient mx-auto max-w-7xl rounded-[3rem] p-10 text-black md:p-20"
      >
        <p className="text-sm font-black uppercase tracking-[0.4em]">Start planning</p>
        <h2 className="serif mt-5 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
          Ready to discover Sudan?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
          Start planning a journey through ancient kingdoms, river cities, desert silence,
          Red Sea horizons, and one of the warmest cultures in the world.
        </p>
        <a
          href="mailto:hello@visitsudan.com"
          className="mt-10 inline-flex rounded-full bg-black px-8 py-4 font-bold text-goldLight hover:scale-[1.02] transition"
        >
          Start Your Sudan Journey
        </a>
      </motion.div>
    </section>
  );
}
