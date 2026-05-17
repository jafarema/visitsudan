export default function MegaFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink px-6 pt-24 pb-12">
      <h2 className="serif mx-auto max-w-7xl text-[18vw] font-black leading-none tracking-tight text-gold-gradient md:text-[14vw]">
        Visit Sudan
      </h2>
      <div className="mx-auto mt-12 grid max-w-7xl gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-goldLight">Brand</p>
          <p className="mt-4 text-white/60">A cinematic tourism platform telling the story of Sudan beyond the headlines.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-goldLight">Explore</p>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>Destinations</li><li>Experiences</li><li>Culture</li><li>Gallery</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-goldLight">Plan</p>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>Travel guide</li><li>Suggested routes</li><li>Custom journeys</li><li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-goldLight">Stay close</p>
          <p className="mt-4 text-white/60">Sign up for cinematic dispatches from Sudan.</p>
          <input className="mt-4 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 outline-none focus:border-goldLight" placeholder="you@email.com" />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
        <p>© Visit Sudan — Sudan, Untold.</p>
        <p>Designed cinematically. Built for travelers, storytellers, and dreamers.</p>
      </div>
    </footer>
  );
}
