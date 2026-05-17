const cards = [
  { t: "Best time", d: "Cooler months are usually best for desert travel and historical exploration." },
  { t: "Culture", d: "Respect local customs, dress modestly, and ask before photographing people." },
  { t: "Transport", d: "Plan routes carefully, especially for remote historical sites." },
  { t: "Safety", d: "Check current conditions and use updated travel information." },
];

export default function TravelGuide() {
  return (
    <section id="guide" className="bg-[#0e0b08] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-gold">Travel Guide</p>
        <h2 className="serif text-5xl font-black md:text-7xl">
          Plan your journey <span className="text-gold-gradient">with confidence.</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {cards.map((c) => (
            <div key={c.t} className="glass rounded-[2rem] p-6">
              <h3 className="text-xl font-bold">{c.t}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
