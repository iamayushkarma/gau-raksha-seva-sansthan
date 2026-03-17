import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';
import Button from '@/shared/components/ui/Button';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  return (
    <section className="px-4 md:px-12 lg:px-20 py-6 md:py-8">
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[420px] md:min-h-[520px] flex items-center justify-center text-center p-6 md:p-12 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 36, 0, 0.4), rgba(45, 36, 0, 0.65)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8M5B-PfcLc_O-UBauMNtJwCeB1i_Ez7mc-6JZbUn0mv1w70CZ_pCBqrdrwZDMuBCXsgnPykIhbVFIYEYeAyqLx0MbUPJfoFvMPZYMGBINU_r1UKXeGduxKaiuTXKxWUbqCt2N3G7tdVa5SUkYF7p90MtrFDwHUbbjNEg1-bStdFfTrYYhJStYzm8hE4YeVgJ0FwH-0NNls8_wTQ-jGHrI2UKmM_Eh33197yLNgt6zravNZBapzdqWwlApdsrv4zcVEMMP_1rrQSM")`,
        }}
      >
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight mb-4">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
            {t('aboutPage.hero.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button
              onClick={navigateToDonate}
              className="bg-primary text-text-primary px-7 py-3 font-semibold text-base hover:scale-105 transition-transform shadow-lg"
            >
              {t('aboutPage.hero.cta_primary')}
            </Button>
            <Button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-3 font-semibold text-base hover:bg-white/20 transition-all">
              {t('aboutPage.hero.cta_secondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
