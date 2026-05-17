import ImageCard from "./ImageCard";
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";

const scenes = [
  { t: "Meroë at sunrise",  c: "Where kingdoms still cast shadows.",   src: IMG.meroeHero,       tone: "gold", big: true },
  { t: "Nile sunset",        c: "The river that carries a nation.",     src: IMG.nileSunset,      tone: "gold" },
  { t: "Red Sea coast",      c: "Blue silence at the desert edge.",     src: IMG.redSeaPortSudan, tone: "nile" },
  { t: "Nubian village",     c: "Color, warmth, and home.",             src: IMG.nubianVillage,   tone: "gold" },
  { t: "Coffee ritual",      c: "Hospitality, poured slowly.",          src: IMG.coffeeRitual,    tone: "gold" },
  { t: "Desert camp",        c: "A sky full of stars.",                 src: IMG.desertCamp,      tone: "nile" },
  { t: "Khartoum",           c: "Two rivers, one heart.",               src: IMG.khartoumNile,    tone: "nile" },
  { t: "Jebel Barkal",       c: "The sacred mountain.",                 src: IMG.jebelBarkal,     tone: "red" },
  { t: "Market colors",      c: "Spices, textiles, daily rhythm.",      src: IMG.sudaneseMarket,  tone: "red" },
];

export default function RippleGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-32">
      <p data-rise className="text-xs uppercase tracking-[0.5em] text-gold">Gallery</p>
      <h2 data-rise className="serif mt-4 text-5xl font-black md:text-8xl">
        Sudan <span className="text-gold-gradient">in scenes.</span>
      </h2>
      <div className="mt-12 grid auto-rows-[320px] gap-5 md:grid-cols-4">
        {scenes.map((s) => (
          <ImageCard
            key={s.t}
            src={s.src}
            eyebrow={s.t}
            title={s.c}
            big={s.big}
            tone={s.tone}
          />
        ))}
      </div>
    </section>
  );
}
