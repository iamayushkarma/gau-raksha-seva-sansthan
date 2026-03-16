import { useTranslation } from 'react-i18next';

const stats = [
  { value: '450+', labelKey: 'aboutPage.stats.cows' },
  { value: '2.5k', labelKey: 'aboutPage.stats.meals' },
  { value: '12k+', labelKey: 'aboutPage.stats.lives' },
  { value: '50+', labelKey: 'aboutPage.stats.acres' },
];

const ImpactStats = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-text-primary py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.labelKey} className="flex flex-col gap-2">
            <p className="text-primary text-5xl font-black">{stat.value}</p>
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
