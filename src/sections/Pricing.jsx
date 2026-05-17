// Pricing.jsx
// Interactive trip configurator. Days slider + tier toggle.
// Price morphs in giant serif numerals.

import { useState } from "react";

const TIERS = {
  essential: 180,
  premium:   320,
  luxury:    480,
};

export default function Pricing() {
  const [days, setDays] = useState(7);
  const [tier, setTier] = useState("luxury");
  const total = TIERS[tier] * days;

  return (
    <section className="px-8 py-32 md:px-12 bg-ink text-ivory">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Plan</p>
        <h2 className="mt-4 font-serif text-6xl md:text-9xl tracking-[-0.04em]">
          Shape your<br /><span className="italic text-goldLight">journey.</span>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Days</p>
              <input
                type="range"
                min="3"
                max="21"
                value={days}
                onChange={(e) => setDays(+e.target.value)}
                className="w-full mt-3 accent-gold"
              />
              <p className="font-serif text-5xl mt-2">{days} days</p>
            </div>
            <div>
              <p className="eyebrow">Style</p>
              <div className="mt-3 flex gap-3">
                {Object.keys(TIERS).map((s) => (
                  <button
                    key={s}
                    onClick={() => setTier(s)}
                    className={
                      `rounded-full border px-5 py-2 text-xs uppercase tracking-[0.32em] font-mono transition ` +
                      (tier === s
                        ? "border-gold text-gold"
                        : "border-ivory/20 text-ivory/60 hover:border-ivory/40")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-ivory/10 p-10 bg-ink-2/40">
            <p className="eyebrow">Estimate</p>
            <p className="font-serif text-8xl mt-2 tracking-[-0.04em] text-goldLight">
              ${total.toLocaleString()}
            </p>
            <p className="mt-3 text-ivory/60">
              All-in: guides, transport, stays, food, ancient sites, sunsets.
            </p>
            <button className="mt-8 rounded-full bg-gold px-8 py-4 text-ink font-bold">
              Request itinerary →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
