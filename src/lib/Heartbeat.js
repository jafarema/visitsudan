// Heartbeat.js
// Audio-reactive zustand store. Reads the average frequency from a
// looping ambient track and broadcasts a 0..1 pulse value, which
// any component can subscribe to in order to gently scale or
// brighten brand elements (the hero word, gold accents, etc).
//
//   import { useHeartbeat, startHeartbeat } from "../lib/Heartbeat";
//   // Activate on user gesture (autoplay restrictions):
//   <button onClick={() => startHeartbeat("/audio/desert-wind.mp3")}>Sound: On</button>
//   const pulse = useHeartbeat((s) => s.pulse);

import { create } from "zustand";

export const useHeartbeat = create((set) => ({
  pulse: 0,
  active: false,
  setPulse: (v) => set({ pulse: v }),
  setActive: (v) => set({ active: v }),
}));

export async function startHeartbeat(src) {
  if (useHeartbeat.getState().active) return;
  const audio = new Audio(src);
  audio.crossOrigin = "anonymous";
  audio.loop = true;
  audio.volume = 0.0001; // inaudible — we only want the analysis signal

  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx();
  const source = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 256;
  source.connect(analyser);
  analyser.connect(ctx.destination);
  await audio.play();
  useHeartbeat.getState().setActive(true);

  const data = new Uint8Array(analyser.frequencyBinCount);
  const loop = () => {
    analyser.getByteFrequencyData(data);
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += data[i];
    const avg = sum / data.length / 255;
    useHeartbeat.getState().setPulse(avg);
    requestAnimationFrame(loop);
  };
  loop();
}
