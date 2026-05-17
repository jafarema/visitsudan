// SoundDesign.js
// Three crossfading ambient tracks — desert wind, Nile flow, soft oud.
// Default muted; activate via unmute() after a user gesture.
// setSection(id) called on scroll fades the right layer in.

import { Howl } from "howler";

const tracks = {
  origin:  new Howl({ src: ["/audio/desert-wind.mp3"], loop: true, volume: 0 }),
  water:   new Howl({ src: ["/audio/nile-flow.mp3"],   loop: true, volume: 0 }),
  culture: new Howl({ src: ["/audio/oud-soft.mp3"],    loop: true, volume: 0 }),
};

const SECTION_TO_TRACK = {
  origin: "origin", land: "origin",
  water: "water",
  saga: "culture", culture: "culture", journeys: "culture",
};

let muted = true;

export function unmute() {
  muted = false;
  Object.values(tracks).forEach((t) => t.play());
}

export function mute() {
  muted = true;
  Object.values(tracks).forEach((t) => t.fade(t.volume(), 0, 600));
}

export function setSection(id) {
  if (muted) return;
  const target = SECTION_TO_TRACK[id];
  Object.entries(tracks).forEach(([k, t]) => {
    t.fade(t.volume(), k === target ? 0.35 : 0, 1200);
  });
}
