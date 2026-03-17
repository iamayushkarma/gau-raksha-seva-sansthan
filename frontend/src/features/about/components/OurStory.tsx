import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { useLayoutEffect } from 'react';

const OurStory = () => {
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-12 lg:px-20 xl:px-40 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX2cX0rMo9scuk9t2Y4ThxSdBb1EesjkhI_Oz00B8K2kt-ZV4vC0eTJV1rXVhdBvyc4tPPHiN_plR_9TmzpBnUH_cCQA5rE77eUlCyvJjOVAfrTUCgxqCs8dnePQOfRn-5PXWhnvRyYCPCpliyPCM4jQKvkDCBO2pVEWDxRCrRh4F1IfDuYvtXdQ2BbUX2nXof6_vfWaV-Jzr-Q821S217UAkPX1g01jDB16JcCbB9AujJ5UZiwNzkXqLqMpuvktskstgr5PtTVJk"
              alt="Traditional Gaushala sanctuary"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-secondary p-5 rounded-2xl text-white shadow-lg hidden md:block">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-xs uppercase tracking-widest font-semibold mt-0.5">
              {t('aboutPage.story.years')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-secondary">
            {t('aboutPage.story.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary">
            {t('aboutPage.story.title')}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {t('aboutPage.story.desc_1')}
          </p>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {t('aboutPage.story.desc_2')}
          </p>

          {/* Quote */}
          <div className="flex gap-4 items-start pt-4 border-t border-primary/20">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <Sparkles size={18} />
            </div>
            <p className="text-base md:text-lg font-semibold italic text-text-secondary">
              "{t('aboutPage.story.quote')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
