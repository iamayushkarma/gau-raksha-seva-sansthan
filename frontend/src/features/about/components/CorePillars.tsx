import { useTranslation } from 'react-i18next';
import { Heart, Leaf, Users } from 'lucide-react';

const CorePillars = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <Heart size={24} />,
      colorClass: 'bg-primary/20 text-primary',
      title: t('aboutPage.pillars.compassion.title'),
      desc: t('aboutPage.pillars.compassion.desc'),
    },
    {
      icon: <Leaf size={24} />,
      colorClass: 'bg-secondary/20 text-secondary',
      title: t('aboutPage.pillars.sustainability.title'),
      desc: t('aboutPage.pillars.sustainability.desc'),
    },
    {
      icon: <Users size={24} />,
      colorClass: 'bg-primary/20 text-text-primary',
      title: t('aboutPage.pillars.community.title'),
      desc: t('aboutPage.pillars.community.desc'),
    },
  ];

  return (
    <section className="bg-primary/10 py-14 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary mb-3">
            {t('aboutPage.pillars.title')}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            {t('aboutPage.pillars.description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-7 md:p-8 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div
                className={`w-14 h-14 ${pillar.colorClass} rounded-xl flex items-center justify-center mb-5`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
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
