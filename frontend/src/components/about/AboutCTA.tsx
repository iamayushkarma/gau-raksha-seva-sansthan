import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/hooks/useDonateNavigate';
import Button from '@/components/ui/Button';

const AboutCTA = () => {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  return (
    <section className="px-4 md:px-20 py-24 text-center">
      <div className="max-w-4xl mx-auto bg-primary/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          {t('aboutPage.cta.title')}
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('aboutPage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={navigateToDonate}
            className="bg-primary text-text-primary h-14 px-10 font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:-translate-y-1"
          >
            {t('aboutPage.cta.donate')}
          </Button>
          <Button className="bg-transparent border-2 border-text-primary text-text-primary h-14 px-10 font-bold text-lg hover:bg-text-primary hover:text-white transition-all">
            {t('aboutPage.cta.adopt')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
