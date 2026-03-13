import { useTranslation } from 'react-i18next';
import { Heart, Leaf, Users } from 'lucide-react';

const CorePillars = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <Heart size={32} />,
      colorClass: 'bg-primary/20 text-primary',
      title: t('aboutPage.pillars.compassion.title'),
      desc: t('aboutPage.pillars.compassion.desc'),
    },
    {
      icon: <Leaf size={32} />,
      colorClass: 'bg-secondary/20 text-secondary',
      title: t('aboutPage.pillars.sustainability.title'),
      desc: t('aboutPage.pillars.sustainability.desc'),
    },
    {
      icon: <Users size={32} />,
      colorClass: 'bg-primary/20 text-text-primary',
      title: t('aboutPage.pillars.community.title'),
      desc: t('aboutPage.pillars.community.desc'),
    },
  ];

  return (
    <section className="bg-primary/10 py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t('aboutPage.pillars.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t('aboutPage.pillars.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-10 rounded-3xl shadow-sm border border-primary/20 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div
                className={`w-20 h-20 ${pillar.colorClass} rounded-2xl flex items-center justify-center mb-8`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
