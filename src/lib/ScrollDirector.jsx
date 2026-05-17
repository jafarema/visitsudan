import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollDirector() {
  useEffect(() => {
    // Cinematic title rise
    gsap.utils.toArray("[data-rise]").forEach((el) => {
      gsap.from(el, {
        y: 120, opacity: 0, duration: 1.2, ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Parallax layers
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      gsap.to(el, {
        yPercent: -speed * 100, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // Pinned chapter blocks
    gsap.utils.toArray("[data-pin]").forEach((el) => {
      ScrollTrigger.create({ trigger: el, start: "top top", end: "+=120%", pin: true, pinSpacing: true });
    });

    // Scroll progress bar
    gsap.to("#scroll-bar", {
      scaleX: 1, transformOrigin: "left center", ease: "none",
      scrollTrigger: { scrub: 0.2 },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[90] h-[3px] w-full bg-transparent">
      <div id="scroll-bar" className="h-full origin-left scale-x-0 bg-gradient-to-r from-goldLight via-gold to-sudan" />
    </div>
  );
}
