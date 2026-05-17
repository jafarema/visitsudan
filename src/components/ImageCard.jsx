import { useRef } from "react";

/**
 * Cinematic image card — used everywhere photography appears.
 *
 *  • object-cover full-bleed image
 *  • dark cinematic overlay (warm sepia → ink)
 *  • gold radial hover glow tracking the cursor
 *  • slow zoom on hover (1.06× over 1200ms)
 *  • optional parallax (mouse offsets translateY by a few px)
 *  • caption (eyebrow + title + dek) protected by bottom gradient
 *  • rounded-[2.5rem] + border-white/10 + premium dark/gold grade
 *
 * Props:
 *   src        image url (from VISIT_SUDAN_IMAGES)
 *   eyebrow    small uppercase label above title
 *   title      large serif headline
 *   dek        optional one-line subtext
 *   big        spans 2 cols + 2 rows on md grids
 *   index      meta numeric ("01 / 06") if provided
 *   total      total count for meta numeric
 *   tone       'gold' | 'nile' | 'red' — accent tint for the hover glow
 */
export default function ImageCard({
  src,
  eyebrow,
  title,
  dek,
  big = false,
  index,
  total,
  tone = "gold",
  className = "",
}) {
  const root = useRef(null);
  const img = useRef(null);

  const onMove = (e) => {
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
    // parallax: subtle image drift opposite to cursor
    if (img.current) {
      const dx = (mx - 50) * 0.06;
      const dy = (my - 50) * 0.06;
      img.current.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
    }
  };
  const onLeave = () => {
    if (img.current) img.current.style.transform = "";
  };

  const glow = {
    gold: "rgba(244,213,141,0.55)",
    nile: "rgba(91,179,206,0.45)",
    red:  "rgba(209,64,52,0.40)",
  }[tone];

  return (
    <article
      ref={root}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink transition duration-700 ${
        big ? "md:col-span-2 md:row-span-2 min-h-[640px]" : "min-h-[320px]"
      } ${className}`}
    >
      {/* Image */}
      <img
        ref={img}
        src={src}
        alt={title || eyebrow || ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out"
        style={{ filter: "saturate(1.05) contrast(1.05) brightness(0.92)" }}
      />

      {/* Cinematic dark-gold grade */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,7,6,0) 0%, rgba(8,7,6,0.15) 30%, rgba(8,7,6,0.65) 80%, rgba(8,7,6,0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(135deg, rgba(217,164,65,0.20), transparent 50%, rgba(14,90,122,0.15))",
        }}
      />

      {/* Gold radial hover glow tracking the cursor */}
      <div
        className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 45%)`,
        }}
      />

      {/* Numeric meta */}
      {typeof index === "number" && (
        <span className="absolute right-8 top-8 z-10 text-xs uppercase tracking-[0.4em] text-goldLight">
          {String(index + 1).padStart(2, "0")}{total ? ` / ${String(total).padStart(2, "0")}` : ""}
        </span>
      )}

      {/* Caption */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.5em] text-goldLight">{eyebrow}</p>
        )}
        {title && (
          <h3 className={`serif mt-3 font-black leading-[0.95] tracking-tight ${big ? "text-6xl md:text-7xl" : "text-3xl md:text-4xl"}`}>
            {title}
          </h3>
        )}
        {dek && (
          <p className="mt-3 max-w-md text-base text-white/75 md:text-lg">{dek}</p>
        )}
      </div>
    </article>
  );
}
