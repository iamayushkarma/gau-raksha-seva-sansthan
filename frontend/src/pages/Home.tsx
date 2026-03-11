import AboutOurGaushala from '@/components/sections/AboutOurGaushala';
import GauSevaOptions from '@/components/sections/GauSevaOptions';
import HeroSection from '@/components/sections/HeroSection';
import SupportGauSeva from '@/components/sections/SupportGauSeva';
import OurServices from '@/components/sections/OurServices';
import Donation from '@/components/sections/Donation';

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutOurGaushala />
      <OurServices />
      <GauSevaOptions />
      <SupportGauSeva />
      <Donation />
    </div>
  );
}

export default Home;
