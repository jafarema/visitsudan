import { motion } from "framer-motion";

export default function Navigation() {
  const links = ["Destinations", "Experiences", "Culture", "Guide", "Gallery"];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-[0.3em] text-goldLight">
          VISIT SUDAN
        </a>
        <div className="hidden gap-8 text-sm text-white/75 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-goldLight transition">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#plan"
          className="rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-goldLight transition hover:bg-gold hover:text-black"
        >
          Start Planning
        </a>
      </nav>
    </motion.header>
  );
}
