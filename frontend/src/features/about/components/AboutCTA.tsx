import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';
import Button from '@/shared/components/ui/Button';

const AboutCTA = () => {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  return (
    <section className="px-4 md:px-20 py-24 text-center">
      <div
        className="relative overflow-hidden
          max-w-6xl mx-auto
          bg-primary rounded-3xl
          px-8 py-16 md:py-20
          text-center"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('aboutPage.cta.title')}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('aboutPage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={navigateToDonate}
            className="bg-white text-primary  h-14 px-10 font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:-translate-y-1"
          >
            {t('aboutPage.cta.donate')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
