import DonationForm from '../components/sections/DonationForm';
import GauSevaOptions from '../components/sections/GauSevaOptions';
import HeroSection from '../components/sections/HeroSection';
import SupportGauSeva from '../components/sections/SupportGauSeva';

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <SupportGauSeva />
      <GauSevaOptions />
      <DonationForm />
    </div>
  );
}

export default Home;
