import AboutOurGaushala from '@/components/sections/AboutOurGaushala';
import DonationForm from '../components/sections/DonationForm';
import GauSevaOptions from '../components/sections/GauSevaOptions';
import HeroSection from '../components/sections/HeroSection';
import SupportGauSeva from '../components/sections/SupportGauSeva';

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <SupportGauSeva />
      <AboutOurGaushala />
      <GauSevaOptions />
      <DonationForm />
    </div>
  );
}

export default Home;
