import { useRef } from "react";

export default function MagneticButton({ children, href = "#", className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-bold transition-transform duration-300 ${className}`}
    >
      {children}
    </a>
  );
}
