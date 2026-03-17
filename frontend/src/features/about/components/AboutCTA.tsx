import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';
import Button from '@/shared/components/ui/Button';

const AboutCTA = () => {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  return (
    <section className="px-4 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="relative overflow-hidden max-w-6xl mx-auto bg-primary rounded-3xl px-8 py-14 md:py-16 text-center">
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-4">
            {t('aboutPage.cta.title')}
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            {t('aboutPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={navigateToDonate}
              className="bg-white text-primary px-8 py-3 font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              {t('aboutPage.cta.donate')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
