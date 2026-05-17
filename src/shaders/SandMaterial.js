// SandMaterial.js
// Custom GLSL ShaderMaterial for the Visit Sudan hero terrain.
// Produces noise-driven dune undulation, slow wind ripples, and
// gold glints on dune crests. Use with a high-poly plane and
// drive `uTime` in a useFrame hook.
//
//   import { SandMaterial } from "../shaders/SandMaterial";
//   useFrame(({ clock }) => { SandMaterial.uniforms.uTime.value = clock.elapsedTime; });

import * as THREE from "three";

export const SandMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime:   { value: 0 },
    uColor1: { value: new THREE.Color("#0a0805") }, // valley shadow
    uColor2: { value: new THREE.Color("#D9A441") }, // brand gold
    uColor3: { value: new THREE.Color("#F4D58D") }, // crest glint
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      float a = hash(i),
            b = hash(i + vec2(1.0, 0.0)),
            c = hash(i + vec2(0.0, 1.0)),
            d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vUv = uv;
      vec3 p = position;
      float n    = noise(p.xy * 0.30 + uTime * 0.05);
      float wind = sin(p.x * 0.6 + uTime * 0.3) * 0.15
                 + cos(p.y * 0.4 + uTime * 0.2) * 0.10;
      p.z += n * 0.6 + wind;
      vWave = p.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    varying float vWave;
    uniform vec3 uColor1, uColor2, uColor3;

    void main() {
      float h = smoothstep(-0.2, 0.6, vWave);
      vec3 c = mix(uColor1, uColor2, h);
      c = mix(c, uColor3, smoothstep(0.4, 0.9, h));
      float glint = pow(h, 6.0);
      c += glint * 0.4;
      gl_FragColor = vec4(c, 1.0);
    }
  `,
});
