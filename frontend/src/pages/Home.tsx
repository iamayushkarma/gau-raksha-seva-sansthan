import AboutOurGaushala from '@/features/homepage/sections/AboutOurGaushala';
import GauSevaOptions from '@/features/homepage/sections/GauSevaOptions';
import HeroSection from '@/features/homepage/sections/HeroSection';
import SupportGauSeva from '@/features/homepage/sections/SupportGauSeva';
import OurServices from '@/features/homepage/sections/OurServices';
import Donation from '@/features/homepage/sections/Donation';
import VideoCarousel from '@/features/video/components/VideoCarousel';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TestimonialSection from '@/features/testimonials/components/TestimonialSection';
import CtaBanner from '@/features/homepage/sections/CtaBanner';

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
      <TestimonialSection />
      <GauSevaOptions />
      <SupportGauSeva />
      <Donation />
      <CtaBanner />
    </div>
  );
}

export default Home;
