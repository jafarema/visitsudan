import { useEffect, useState } from "react";
export default function useMotionSafe() {
  const [safe, setSafe] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setSafe(!mq.matches);
    const onChange = () => setSafe(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return safe;
}
