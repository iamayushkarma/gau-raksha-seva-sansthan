import { useTranslation } from 'react-i18next';
import DonateNow from '@/shared/components/button/DonateNow';

function SupportGauSeva() {
  const { t } = useTranslation();
  return (
    <section className="lg:px-16 md:px-12 sm:px-8 px-4 py-10 md:py-14">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div
            className="relative w-full rounded-xl overflow-hidden shadow-lg"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              src="https://www.youtube.com/embed/9SqKQhdIJHA"
              title={t('supportSection.imageAlt')}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary">
            {t('supportSection.title')}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {t('supportSection.description')}
          </p>
          <div className="mt-2">
            <DonateNow shimmer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportGauSeva;
