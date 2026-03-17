import { useTranslation } from 'react-i18next';

const stats = [
  { value: '110+', labelKey: 'aboutPage.stats.cows' },
  { value: '150', labelKey: 'aboutPage.stats.meals' },
  { value: '1k+', labelKey: 'aboutPage.stats.lives' },
  { value: '25+', labelKey: 'aboutPage.stats.acres' },
];

const ImpactStats = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-text-primary py-14 md:py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.labelKey} className="flex flex-col gap-2">
            <p className="text-primary text-4xl md:text-5xl font-bold">
              {stat.value}
            </p>
            <p className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-widest">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
