import SmoothScroll from "./lib/SmoothScroll";
import ScrollDirector from "./lib/ScrollDirector";
import SoundDirector from "./lib/SoundDirector";
import GoldBurst from "./lib/GoldBurst";

import Curtain from "./components/Curtain";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import LightShafts from "./components/LightShafts";
import LivingSky from "./components/LivingSky";

import Navigation from "./components/Navigation";
import Hero3D from "./components/Hero3D";
import Marquee from "./components/Marquee";
import WhySudan from "./components/WhySudan";
import HorizontalDestinations from "./components/HorizontalDestinations";
import StoryChapters from "./components/StoryChapters";
import Stats from "./components/Stats";
import Experiences from "./components/Experiences";
import Culture from "./components/Culture";
import RippleGallery from "./components/RippleGallery";
import Quote from "./components/Quote";
import TravelGuide from "./components/TravelGuide";
import PlanForm from "./components/PlanForm";
import MegaFooter from "./components/MegaFooter";

export default function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <Curtain />
      <Cursor />
      <LightShafts />
      <LivingSky />
      <ScrollDirector />
      <SoundDirector />
      <GoldBurst targetId="plan" />

      <div className="relative bg-ink text-ivory">
        <Navigation />
        <Hero3D />
        <Marquee />
        <WhySudan />
        <HorizontalDestinations />
        <StoryChapters />
        <Stats />
        <Experiences />
        <Culture />
        <RippleGallery />
        <Quote />
        <TravelGuide />
        <PlanForm />
        <MegaFooter />
      </div>
    </SmoothScroll>
  );
}
