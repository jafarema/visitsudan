import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingPyramidLayer({ y = 0, depth = -5, color = "#D9A441", count = 8, speed = 0.05 }) {
  const group = useRef();
  useFrame((s) => {
    if (!group.current) return;
    group.current.position.x = Math.sin(s.clock.elapsedTime * speed) * 2;
    group.current.rotation.y = s.clock.elapsedTime * speed * 0.3;
  });
  const items = Array.from({ length: count });
  return (
    <group ref={group} position={[0, y, depth]}>
      {items.map((_, i) => (
        <mesh key={i} position={[(i - count / 2) * 4, 0, (i % 2) * 2]}>
          <coneGeometry args={[0.8, 1.4, 4]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

export default function LivingSky() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <color attach="background" args={["#080706"]} />
        <fog attach="fog" args={["#080706", 4, 24]} />
        <FloatingPyramidLayer y={-3} depth={-10} count={10} color="#D9A441" speed={0.04} />
        <FloatingPyramidLayer y={-4} depth={-16} count={12} color="#0E5A7A" speed={0.02} />
      </Canvas>
    </div>
  );
}
