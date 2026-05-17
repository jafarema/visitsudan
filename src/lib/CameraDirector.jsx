// CameraDirector.jsx
// Scrubs the active R3F camera through 5 cinematic keyframes as the
// page scrolls. Drop inside any <Canvas> that should follow the
// document scroll position.

import { useFrame, useThree } from "@react-three/fiber";

const KEYS = [
  { y: 0,    pos: [ 0, 6,   14], look: [ 0, 1,   0] },
  { y: 0.25, pos: [-2, 3,    8], look: [-1, 0,   0] },
  { y: 0.5,  pos: [ 1, 1.2,  5], look: [ 0, 0.5, 0] },
  { y: 0.75, pos: [ 4, 0.6,  3], look: [ 2, 0,   0] },
  { y: 1,    pos: [ 0, 0.4,  2], look: [ 0, 0.2, 0] },
];

const lerp = (a, b, t) => a + (b - a) * t;

export default function CameraDirector() {
  const { camera } = useThree();

  useFrame(() => {
    const range = document.body.scrollHeight - window.innerHeight;
    const y = range > 0 ? window.scrollY / range : 0;
    let i = 0;
    while (i < KEYS.length - 1 && y > KEYS[i + 1].y) i++;
    const a = KEYS[i], b = KEYS[Math.min(i + 1, KEYS.length - 1)];
    const span = b.y - a.y || 1;
    const t = (y - a.y) / span;
    camera.position.set(
      lerp(a.pos[0], b.pos[0], t),
      lerp(a.pos[1], b.pos[1], t),
      lerp(a.pos[2], b.pos[2], t),
    );
    camera.lookAt(
      lerp(a.look[0], b.look[0], t),
      lerp(a.look[1], b.look[1], t),
      lerp(a.look[2], b.look[2], t),
    );
  });
  return null;
}
