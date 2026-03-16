import AboutOurGaushala from '@/components/sections/AboutOurGaushala';
import GauSevaOptions from '@/components/sections/GauSevaOptions';
import HeroSection from '@/components/sections/HeroSection';
import SupportGauSeva from '@/components/sections/SupportGauSeva';
import OurServices from '@/components/sections/OurServices';
import Donation from '@/components/sections/Donation';
import VideoCarousel from '@/components/sections/VideoCarousel';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TestimonialSection from '@/components/sections/TestimonialSection';

function Home() {
  const useScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  };
  useScrollToHash();
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutOurGaushala />
      <OurServices />
      <VideoCarousel />
      <GauSevaOptions />
      <SupportGauSeva />
      <Donation />
      <TestimonialSection />
    </div>
  );
}

export default Home;
