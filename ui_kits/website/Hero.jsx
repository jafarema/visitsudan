import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Environment } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

function Pyramid({ position, scale = 1, color = "#D9A441" }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <coneGeometry args={[1, 1.6, 4]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  );
}

function DesertPlane() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 0.4 + t * 0.4) * 0.25 + Math.cos(y * 0.5) * 0.2);
    }
    pos.needsUpdate = true;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
      <planeGeometry args={[40, 40, 60, 60]} />
      <meshStandardMaterial
        color="#3a2a14"
        wireframe
        emissive="#D9A441"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

function GoldParticles() {
  const ref = useRef();
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = Math.random() * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#F4D58D" size={0.05} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 1.5, 8], fov: 55 }}>
          <color attach="background" args={["#080706"]} />
          <fog attach="fog" args={["#080706", 8, 24]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F4D58D" />
          <pointLight position={[-6, 2, -4]} intensity={1.5} color="#0E5A7A" />
          <Stars radius={50} depth={20} count={1500} factor={3} fade speed={0.5} />
          <DesertPlane />
          <Pyramid position={[-3, 0, -1]} scale={1.4} />
          <Pyramid position={[2.5, -0.4, 0]} scale={1.1} color="#F4D58D" />
          <Pyramid position={[0, -0.8, 2]} scale={0.8} />
          <Pyramid position={[5, 0.4, -3]} scale={1.6} />
          <GoldParticles />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.5em] text-goldLight"
        >
          Sudan, Untold
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="serif text-7xl font-black leading-[0.85] tracking-tight md:text-[10rem]"
        >
          Visit <span className="text-gold-gradient">Sudan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl"
        >
          Discover the land of ancient kingdoms, golden deserts, Nile legends, Red Sea horizons,
          and unforgettable hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#destinations"
            className="gold-gradient rounded-full px-8 py-4 text-center font-bold text-black shadow-2xl shadow-gold/25 hover:scale-[1.02] transition"
          >
            Explore Destinations
          </a>
          <a
            href="#plan"
            className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white hover:border-goldLight hover:text-goldLight transition"
          >
            Plan Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
