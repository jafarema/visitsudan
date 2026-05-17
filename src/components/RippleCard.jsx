import { useRef } from "react";

export default function RippleCard({ title, caption, big = false }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 transition duration-700 ${
        big ? "md:col-span-2 md:row-span-2 min-h-[640px]" : "min-h-[320px]"
      }`}
      style={{
        background:
          "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(244,213,141,0.35), transparent 50%), linear-gradient(135deg, rgba(217,164,65,0.15), rgba(14,90,122,0.25))",
      }}
    >
      <div
        className="absolute inset-0 mix-blend-screen opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(244,213,141,0.55), transparent 55%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-8">
        <p className="text-xs uppercase tracking-[0.5em] text-goldLight">{title}</p>
        <h3 className={`serif ${big ? "text-6xl" : "text-3xl"} font-black leading-tight transition duration-700 group-hover:translate-y-[-4px]`}>
          {caption}
        </h3>
      </div>
    </div>
  );
}
