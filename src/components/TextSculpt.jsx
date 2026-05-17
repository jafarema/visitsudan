// TextSculpt.jsx
// 3D extruded serif word "SUDAN" using drei's Text3D + Fraunces.
// Mouse rotates it; scroll levitates it. Goes between Culture and
// Journeys in the main page flow.
//
// Requires:  /fonts/fraunces.json  (Three.js font JSON for Fraunces SemiBold)
//   Generate at https://gero3.github.io/facetype.js/ from Fraunces.ttf
//
// Lazy-load this component with React.lazy + Suspense to keep TTI low.

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { useRef } from "react";

function SudanWord() {
  const ref = useRef();
  useFrame(({ mouse, clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = mouse.y * 0.2;
    ref.current.rotation.y = mouse.x * 0.4;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
  });
  return (
    <Center>
      <Text3D
        ref={ref}
        font="/fonts/fraunces.json"
        size={2.2}
        height={0.4}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.03}
        bevelThickness={0.04}
      >
        SUDAN
        <meshStandardMaterial
          color="#D9A441"
          metalness={0.95}
          roughness={0.2}
          emissive="#D9A441"
          emissiveIntensity={0.15}
        />
      </Text3D>
    </Center>
  );
}

export default function TextSculpt() {
  return (
    <div className="h-[80vh] w-full">
      <Canvas camera={{ position: [0, 0, 7] }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 4]} intensity={2} color="#F4D58D" />
        <pointLight position={[-3, 2, 3]} intensity={2} color="#0E5A7A" />
        <SudanWord />
      </Canvas>
    </div>
  );
}
