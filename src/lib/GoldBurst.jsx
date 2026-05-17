import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function GoldBurst({ targetId = "plan" }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            confetti({
              particleCount: 140,
              spread: 90,
              startVelocity: 35,
              ticks: 220,
              origin: { y: 0.6 },
              colors: ["#F4D58D", "#D9A441", "#E7C994", "#B3261E"],
              scalar: 1.1,
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [targetId]);
  return null;
}
