import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border border-goldLight/70 mix-blend-difference" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-goldLight" />
    </>
  );
}
