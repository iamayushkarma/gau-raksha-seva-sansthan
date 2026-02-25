import { useTranslation } from 'react-i18next';
import DonateNowShimmer from '@/components/common/button/DonateNowShimmer';

function SupportGauSeva() {
  const { t } = useTranslation();
  return (
    <section className="mt-12 md:mt-10 lg:px-16 md:px-12 sm:px-8 px-4 py-6">
      <div className="flex flex-col lg:flex-row">
        {/* Video/image section */}
        <div className="lg:w-1/2 p-2 md:p-5">
          <img
            src="https://placehold.co/1000x667" // (3:2 ratio)
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={t('supportSection.imageAlt')}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Content section */}
        <div className="lg:w-1/2 p-2 md:p-5 mt-4">
          <h2 className="font-bold text-3xl md:text-4xl text-text-primary">
            {t('supportSection.title')}
          </h2>
          <p className="mt-6">{t('supportSection.description')}</p>
          <DonateNowShimmer />
        </div>
      </div>
    </section>
  );
}

export default SupportGauSeva;
