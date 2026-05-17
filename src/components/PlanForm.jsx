export default function PlanForm() {
  return (
    <section id="plan" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Plan Your Trip</p>
          <h2 className="serif mt-4 text-5xl font-black md:text-7xl">
            Your Sudan story <span className="text-gold-gradient">starts here.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/65">
            Tell us how you want to experience Sudan — ancient history, desert silence,
            Nile culture, Red Sea adventure, food, or a fully custom journey.
          </p>
        </div>
        <form className="glass space-y-5 rounded-[2rem] p-8">
          <input className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 outline-none focus:border-goldLight" placeholder="Full name" />
          <input className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 outline-none focus:border-goldLight" placeholder="Email" />
          <input className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 outline-none focus:border-goldLight" placeholder="Travel dates" />
          <select className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 outline-none focus:border-goldLight">
            <option>Ancient history</option>
            <option>Desert camping</option>
            <option>Nile experience</option>
            <option>Red Sea diving</option>
            <option>Culture & food</option>
            <option>Custom journey</option>
          </select>
          <textarea rows="4" className="w-full rounded-3xl border border-white/15 bg-white/5 px-6 py-4 outline-none focus:border-goldLight" placeholder="Tell us your dream Sudan trip…" />
          <button type="button" className="gold-gradient w-full rounded-full px-8 py-4 font-bold text-black hover:scale-[1.02] transition">
            Send My Trip Request
          </button>
        </form>
      </div>
    </section>
  );
}
