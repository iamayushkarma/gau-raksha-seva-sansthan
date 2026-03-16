import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../../../shared/components/ui/Button';

const AboutOurGaushala = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      className="py-16 lg:px-16 md:px-12 sm:px-8 px-4 overflow-hidden
  bg-linear-to-br from-background via-[#fff3e8] to-[#ffe8d0]"
    >
      {/* Section heading */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t('about.who_we_are')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
          {t('about.title')}
        </h2>
        <p className="text-text-secondary mt-3 max-w-xl mx-auto">
          {t('about.description')}
        </p>
      </div>
      <div className="flex mt-10 flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div className="relative z-10 w-full aspect-4/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10"></div>

            <img
              src="https://images.pexels.com/photos/19840478/pexels-photo-19840478.jpeg?cs=srgb&dl=pexels-tango4567-19840478.jpg&fm=jpg"
              alt="A gentle cow in a sunlit pasture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="pointer-events-none absolute -top-4 -left-4 w-48 h-48 border-4 border-primary/30 rounded-xl"></div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {t('about.section_title', 'Our Sacred Journey')}
          </h2>

          {/* Description */}
          <p className="text-text-secondary mt-1">
            {t(
              'about.section_desc_1',
              'Founded in 1998, our sanctuary began with just two rescued calves in a small shed. Over two decades of unwavering devotion, it has blossomed into a 50-acre haven dedicated to the protection and care of these divine creatures.'
            )}
          </p>

          <p className="text-text-secondary">
            {t(
              'about.section_desc_2',
              'Every corner of our grounds tells a story of compassion. We provide a lifetime of medical care, nourishing feed, and a peaceful environment where every soul is respected.'
            )}
          </p>

          <p className="text-text-secondary">
            {t(
              'about.section_desc_3',
              'Our daily operations are a labor of love, beginning before dawn with personalized health checks and the distribution of fresh, organic fodder. From specialized geriatric care for our elders to playful paddocks for the youngsters, our dedicated team ensures every cow receives genuine affection and a dignified life.'
            )}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-primary">50+</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {t('about.stat_acres', 'Acres of Haven')}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-primary">500+</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {t('about.stat_souls', 'Rescued Souls')}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              onClick={() => navigate('/about')}
              icon={
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              }
            >
              {t('about.learn_more')}
            </Button>

            <Button
              icon={
                <Play size={16} className="text-primary" fill="currentColor" />
              }
              className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all text-text-primary font-semibold px-6 py-3 rounded-full"
            >
              {t('about.watch_legacy')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurGaushala;
