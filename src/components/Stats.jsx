const stats = [
  { n: "200+", l: "Nubian Pyramids" },
  { n: "5,000", l: "Years of History" },
  { n: "853 km", l: "of Red Sea Coast" },
  { n: "2", l: "Niles Become One" },
];

export default function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-24 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l} className="border-t border-white/10 pt-6">
          <p className="serif text-5xl font-black md:text-7xl text-gold-gradient">{s.n}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/55">{s.l}</p>
        </div>
      ))}
    </section>
  );
}
