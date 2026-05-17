import { useEffect, useState } from "react";
import { Howl } from "howler";

export default function SoundDirector() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (muted) return;
    const wind = new Howl({
      src: ["https://cdn.pixabay.com/audio/2022/03/15/audio_dc91d6f7b8.mp3"],
      loop: true, volume: 0.25,
    });
    const oud = new Howl({
      src: ["https://cdn.pixabay.com/audio/2023/09/20/audio_5d4ad6d6c8.mp3"],
      volume: 0.5,
    });
    wind.play();
    let played = false;
    const onScroll = () => {
      if (!played && window.scrollY > window.innerHeight * 0.8) {
        oud.play();
        played = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      wind.stop();
      window.removeEventListener("scroll", onScroll);
    };
  }, [muted]);

  return (
    <button
      onClick={() => setMuted((m) => !m)}
      className="fixed bottom-6 right-6 z-[80] rounded-full border border-goldLight/40 bg-black/40 px-5 py-3 text-xs uppercase tracking-[0.3em] text-goldLight backdrop-blur-md hover:bg-gold hover:text-black transition"
    >
      {muted ? "Sound: Off" : "Sound: On"}
    </button>
  );
}
