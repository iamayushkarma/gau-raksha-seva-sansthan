import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/hooks/useDonateNavigate';
import Button from '@/components/ui/Button';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  return (
    <section className="px-4 md:px-20 py-8">
      <div
        className="relative overflow-hidden rounded-xl md:rounded-3xl min-h-[500px] flex items-center justify-center text-center p-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 36, 0, 0.4), rgba(45, 36, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8M5B-PfcLc_O-UBauMNtJwCeB1i_Ez7mc-6JZbUn0mv1w70CZ_pCBqrdrwZDMuBCXsgnPykIhbVFIYEYeAyqLx0MbUPJfoFvMPZYMGBINU_r1UKXeGduxKaiuTXKxWUbqCt2N3G7tdVa5SUkYF7p90MtrFDwHUbbjNEg1-bStdFfTrYYhJStYzm8hE4YeVgJ0FwH-0NNls8_wTQ-jGHrI2UKmM_Eh33197yLNgt6zravNZBapzdqWwlApdsrv4zcVEMMP_1rrQSM")`,
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-8 leading-relaxed">
            {t('aboutPage.hero.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={navigateToDonate}
              className="bg-primary text-text-primary h-14 px-8 font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              {t('aboutPage.hero.cta_primary')}
            </Button>
            <Button className="bg-white/10 backdrop-blur-md border border-white/30 text-white h-14 px-8 font-bold text-lg hover:bg-white/20 transition-all">
              {t('aboutPage.hero.cta_secondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
