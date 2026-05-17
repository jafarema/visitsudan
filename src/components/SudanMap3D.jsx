// SudanMap3D.jsx
// Abstract low-poly 3D map of Sudan with glowing gold hotspots.
// Hovering a hotspot reveals a cinematic floating card below the
// scene. Slow auto-rotate.

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useState } from "react";

const HOTSPOTS = [
  { id: "meroe",     name: "Meroë",           pos: [ 0.4,  0.6, 0.2], copy: "Pyramids in the desert." },
  { id: "khartoum",  name: "Khartoum",        pos: [ 0.1, -0.1, 0.2], copy: "Two Niles, one heart." },
  { id: "portsudan", name: "Port Sudan",      pos: [ 1.6,  1.0, 0.2], copy: "Red Sea light." },
  { id: "jebel",     name: "Jebel Barkal",    pos: [-0.6,  0.9, 0.2], copy: "Sacred mountain." },
  { id: "nubia",     name: "Nubian Villages", pos: [-0.4,  1.5, 0.2], copy: "Color and home." },
];

function SudanShape() {
  // Placeholder: a wireframe cone read as an abstract Sudan landmass.
  // Replace with a low-poly GLB of the actual outline before launch.
  return (
    <mesh rotation={[-Math.PI / 2.4, 0, 0]}>
      <coneGeometry args={[2.6, 0.4, 5, 1, true]} />
      <meshStandardMaterial color="#1a120a" wireframe />
    </mesh>
  );
}

function Hotspot({ h, onHover }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 2) * 0.15);
  });
  return (
    <group position={h.pos}>
      <mesh ref={ref} onPointerOver={() => onHover(h)} onPointerOut={() => onHover(null)}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#F4D58D" />
      </mesh>
      <Html distanceFactor={6}>
        <span className="ml-3 text-[10px] uppercase tracking-[0.32em] font-mono text-goldLight whitespace-nowrap">
          {h.name}
        </span>
      </Html>
    </group>
  );
}

export default function SudanMap3D() {
  const [hover, setHover] = useState(null);
  return (
    <section className="relative h-screen w-full bg-ink">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#F4D58D" />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#0E5A7A" />
        <SudanShape />
        {HOTSPOTS.map((h) => <Hotspot key={h.id} h={h} onHover={setHover} />)}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      {hover && (
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 max-w-md rounded-3xl border border-ivory/10 bg-ink/70 p-6 backdrop-blur-xl">
          <p className="eyebrow">Destination</p>
          <h3 className="font-serif text-3xl mt-2 text-ivory">{hover.name}</h3>
          <p className="text-ivory/70 mt-2">{hover.copy}</p>
        </div>
      )}
    </section>
  );
}
