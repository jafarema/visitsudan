// AsciiToggle.jsx
// Floating button that flips the entire site into a live ASCII / scanline
// view via CSS filters. Disables itself under prefers-reduced-motion.

import { useEffect, useState } from "react";

export default function AsciiToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("ascii", on);
  }, [on]);

  // Respect reduced-motion users; the scanline overlay can be disorienting.
  const reduce = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return null;

  return (
    <>
      <style>{`
        .ascii *           { filter: grayscale(1) contrast(1.6); }
        .ascii img, .ascii video {
          filter: grayscale(1) contrast(2) brightness(1.1);
          image-rendering: pixelated;
        }
        .ascii::before {
          content: ""; position: fixed; inset: 0;
          pointer-events: none; z-index: 70;
          background-image: repeating-linear-gradient(
            0deg, rgba(0,0,0,0.4) 0, rgba(0,0,0,0.4) 1px,
            transparent 1px, transparent 3px);
          mix-blend-mode: multiply;
        }
      `}</style>
      <button
        onClick={() => setOn((v) => !v)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80]
                   rounded-full border border-ivory/20 bg-ink/60
                   px-5 py-3 text-[10px] uppercase tracking-[0.32em]
                   font-mono text-ivory backdrop-blur-md
                   hover:text-gold transition"
      >
        {on ? "Exit ASCII Mode" : "Switch to ASCII Mode"}
      </button>
    </>
  );
}
