import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Button from '@/shared/components/ui/Button';
import AboutHero from '@/features/about/components/AboutHero';
import OurStory from '@/features/about/components/OurStory';
import CorePillars from '@/features/about/components/CorePillars';
import MeetTheHerd from '@/features/about/components/MeetTheHerd';
import ImpactStats from '@/features/about/components/ImpactStats';
import AboutCTA from '@/features/about/components/AboutCTA';

const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Back Button */}
      <div className="px-4 md:px-20 pt-6">
        <Button
          onClick={() => navigate(-1)}
          icon={
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          }
          className="inline-flex flex-row-reverse items-center gap-2 text-text-secondary hover:text-text-primary font-semibold text-sm transition-colors bg-transparent group"
        >
          {t('aboutPage.back')}
        </Button>
      </div>

      <AboutHero />
      <OurStory />
      <CorePillars />
      <MeetTheHerd />
      <ImpactStats />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
