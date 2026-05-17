// InkTrail.jsx
// Site-wide canvas cursor trail that paints warm gold ink fading
// over ~900ms. Skipped under prefers-reduced-motion.

import { useEffect, useRef } from "react";

export default function InkTrail() {
  const c = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    const resize = () => {
      cv.width = innerWidth;
      cv.height = innerHeight;
    };
    resize();

    const pts = [];
    const move = (e) => pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    addEventListener("mousemove", move);
    addEventListener("resize", resize);

    let raf;
    (function loop() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      const now = performance.now();
      for (let i = pts.length - 1; i >= 0; i--) {
        const age = now - pts[i].t;
        if (age > 900) { pts.splice(i, 1); continue; }
        const r = 22 * (1 - age / 900);
        const g = ctx.createRadialGradient(pts[i].x, pts[i].y, 0, pts[i].x, pts[i].y, r);
        g.addColorStop(0, "rgba(244,213,141,0.5)");
        g.addColorStop(1, "rgba(244,213,141,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", move);
      removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={c}
      className="pointer-events-none fixed inset-0 z-[55] mix-blend-screen"
    />
  );
}
