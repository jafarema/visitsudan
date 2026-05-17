export default function Marquee() {
  const items = ["Sudan, Untold", "Meroë", "The Nile", "Red Sea", "Jebel Barkal", "Nubian Villages", "Desert Silence", "Khartoum", "Suakin"];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-8">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="serif text-5xl font-black uppercase tracking-tight text-white/15 md:text-7xl">
            {t} <span className="text-gold-gradient">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
