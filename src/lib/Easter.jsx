// Easter.jsx
// Type "sudan" anywhere on the site → 2 seconds of gold confetti rain.

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Easter() {
  useEffect(() => {
    let buffer = "";
    const onKey = (e) => {
      buffer = (buffer + e.key.toLowerCase()).slice(-5);
      if (buffer === "sudan") {
        const end = Date.now() + 2000;
        (function frame() {
          confetti({
            particleCount: 6,
            startVelocity: 18,
            spread: 90,
            origin: { x: Math.random(), y: -0.1 },
            colors: ["#D9A441", "#F4D58D", "#B3261E"],
            scalar: 1.2,
            ticks: 220,
            gravity: 0.6,
          });
          if (Date.now() < end) requestAnimationFrame(frame);
        })();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
