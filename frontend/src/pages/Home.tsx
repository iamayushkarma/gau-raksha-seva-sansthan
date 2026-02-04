import GauSevaOptions from "../components/sections/GauSevaOptions";
import HeroSection from "../components/sections/HeroSection";
import SupportGauSeva from "../components/sections/SupportGauSeva";

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <SupportGauSeva />
      <GauSevaOptions />
    </div>
  );
}

export default Home;
