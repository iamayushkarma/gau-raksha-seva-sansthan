import { useTranslation } from 'react-i18next';
function OurJourney() {
  const { t } = useTranslation();
  return (
    <div className="relative pl-8 border-l-2 border-primary/20 space-y-6">
      <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
      <div>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {t('about.journey_title')}
        </h3>
        <p className="text-text-secondary">{t('about.journey_desc')}</p>
      </div>
    </div>
  );
}

export default OurJourney;
