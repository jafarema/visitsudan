// GoldDustField.jsx
// 4000-particle gold dust falling slowly with horizontal sway and
// infinite respawn at the top. Drop into the Origin and Saga scenes.
// Halves count under prefers-reduced-motion.

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function GoldDustField({ count = 4000 }) {
  const reduce = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const n = reduce ? Math.floor(count / 4) : count;

  const ref = useRef();
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(n * 3);
    const speeds = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] =  Math.random() * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      speeds[i] = 0.01 + Math.random() * 0.03;
    }
    return { positions, speeds };
  }, [n]);

  useFrame(() => {
    if (!ref.current) return;
    const p = ref.current.geometry.attributes.position.array;
    const t = performance.now() * 0.0005;
    for (let i = 0; i < n; i++) {
      p[i * 3 + 1] -= speeds[i];
      if (p[i * 3 + 1] < -2) p[i * 3 + 1] = 15;
      p[i * 3] += Math.sin(t + i) * 0.005;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#F4D58D" size={0.03} transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}
