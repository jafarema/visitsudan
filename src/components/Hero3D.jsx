import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Environment, MeshTransmissionMaterial, ScrollControls, useScroll } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";

function Pyramid({ position, scale = 1, color = "#D9A441", speed = 1 }) {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.2 * speed;
    ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime * speed) * 0.15;
  });
  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      <coneGeometry args={[1, 1.6, 4]} />
      <meshStandardMaterial color={color} metalness={0.85} roughness={0.18} emissive={color} emissiveIntensity={0.25} />
    </mesh>
  );
}

function NileLightTrail() {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.material.opacity = 0.4 + Math.sin(s.clock.elapsedTime) * 0.15;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 2]}>
      <planeGeometry args={[14, 2]} />
      <meshBasicMaterial color="#0E5A7A" transparent opacity={0.5} />
    </mesh>
  );
}

function DesertTerrain() {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 0.3 + t * 0.3) * 0.35 + Math.cos(y * 0.4 + t * 0.2) * 0.25);
    }
    pos.needsUpdate = true;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.3, 0]}>
      <planeGeometry args={[60, 60, 80, 80]} />
      <meshStandardMaterial color="#2a1d10" wireframe emissive="#D9A441" emissiveIntensity={0.06} />
    </mesh>
  );
}

function GoldDust({ count = 800 }) {
  const ref = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = Math.random() * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.015;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#F4D58D" size={0.04} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { mouse, camera } = state;
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.8 + 1.2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Cinematic photography backdrop — Meroë at golden hour.
          Layered BEHIND the 3D canvas with low opacity + warm grade
          so the pyramids feel embedded in a real desert. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${IMG.meroeHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "saturate(1.1) contrast(1.05) brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink" />

      <div className="absolute inset-0 z-[1]">
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 55 }} dpr={[1, 2]} gl={{ alpha: true }} style={{ background: "transparent" }}>
          <fog attach="fog" args={["#080706", 6, 22]} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[6, 9, 4]} intensity={1.3} color="#F4D58D" castShadow />
          <pointLight position={[-6, 3, -3]} intensity={2} color="#0E5A7A" />
          <pointLight position={[6, 1, 4]} intensity={1.5} color="#B3261E" />

          <Suspense fallback={null}>
            <Stars radius={50} depth={20} count={2200} factor={3} fade speed={0.6} />
            <DesertTerrain />
            <NileLightTrail />
            <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
              <Pyramid position={[-3, 0, -1]} scale={1.5} />
              <Pyramid position={[2.5, -0.4, 0]} scale={1.1} color="#F4D58D" speed={0.8} />
              <Pyramid position={[0, -0.8, 2]} scale={0.8} speed={1.3} />
              <Pyramid position={[5, 0.5, -3]} scale={1.7} />
              <Pyramid position={[-5.5, -0.2, -4]} scale={1.3} color="#F4D58D" />
            </Float>
            <GoldDust />
            <Environment preset="sunset" />
          </Suspense>

          <CameraRig />

          <EffectComposer>
            <Bloom intensity={1.1} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
            <ChromaticAberration offset={[0.0008, 0.0008]} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-32">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6 text-xs font-semibold uppercase tracking-[0.6em] text-goldLight">
          Sudan, Untold
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="serif text-7xl font-black leading-[0.82] tracking-tight md:text-[11rem]">
          Visit <span className="text-gold-gradient">Sudan</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }} className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
          Discover the land of ancient kingdoms, golden deserts, Nile legends, Red Sea horizons, and unforgettable hospitality.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#destinations" className="gold-gradient rounded-full px-8 py-4 text-center font-bold text-black shadow-2xl shadow-gold/30 hover:scale-[1.03] transition">
            Explore Destinations
          </a>
          <a href="#plan" className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white hover:border-goldLight hover:text-goldLight transition">
            Plan Your Journey
          </a>
        </motion.div>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/40">
          <span className="block h-px w-12 bg-goldLight/60" />
          Scroll to enter Sudan
        </div>
      </div>
    </section>
  );
}
