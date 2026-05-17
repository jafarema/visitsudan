import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhySudan from "./components/WhySudan";
import Destinations from "./components/Destinations";
import Experiences from "./components/Experiences";
import Culture from "./components/Culture";
import Gallery from "./components/Gallery";
import TravelGuide from "./components/TravelGuide";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-hidden bg-ink text-ivory">
      <Navigation />
      <Hero />
      <WhySudan />
      <Destinations />
      <Experiences />
      <Culture />
      <Gallery />
      <TravelGuide />
      <FinalCTA />
      <Footer />
    </div>
  );
}
