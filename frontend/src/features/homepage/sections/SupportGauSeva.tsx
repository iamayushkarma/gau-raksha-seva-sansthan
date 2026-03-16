import { useTranslation } from 'react-i18next';
import DonateNow from '@/shared/components/button/DonateNow';

function SupportGauSeva() {
  const { t } = useTranslation();
  return (
    <section className="lg:px-16 md:px-12 sm:px-8 px-4 py-6 mb-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-2 md:p-5">
          <div
            className="relative w-full rounded-xl overflow-hidden shadow-lg"
            style={{ paddingTop: '66.67%' }}
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
        {/* Content section */}
        <div className="lg:w-1/2 p-2 md:p-5 mt-4">
          <h2 className="font-bold text-3xl md:text-4xl text-text-primary">
            {t('supportSection.title')}
          </h2>
          <p className="mt-6">{t('supportSection.description')}</p>
          <div className="mt-3">
            <DonateNow shimmer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportGauSeva;
