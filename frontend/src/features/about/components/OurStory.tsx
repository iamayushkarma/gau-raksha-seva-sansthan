import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { useLayoutEffect } from 'react';

const OurStory = () => {
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-40 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX2cX0rMo9scuk9t2Y4ThxSdBb1EesjkhI_Oz00B8K2kt-ZV4vC0eTJV1rXVhdBvyc4tPPHiN_plR_9TmzpBnUH_cCQA5rE77eUlCyvJjOVAfrTUCgxqCs8dnePQOfRn-5PXWhnvRyYCPCpliyPCM4jQKvkDCBO2pVEWDxRCrRh4F1IfDuYvtXdQ2BbUX2nXof6_vfWaV-Jzr-Q821S217UAkPX1g01jDB16JcCbB9AujJ5UZiwNzkXqLqMpuvktskstgr5PtTVJk"
              alt="Traditional Gaushala sanctuary"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl text-white shadow-xl hidden md:block">
            <p className="text-3xl font-bold">25+</p>
            <p className="text-xs uppercase tracking-widest font-semibold">
              {t('aboutPage.story.years')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {t('aboutPage.story.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {t('aboutPage.story.title')}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {t('aboutPage.story.desc_1')}
          </p>
          <p className="text-text-secondary leading-relaxed">
            {t('aboutPage.story.desc_2')}
          </p>
          <div className="flex gap-4 items-center pt-4 border-t border-primary/20">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Sparkles size={20} />
            </div>
            <p className="font-bold italic text-text-secondary">
              "{t('aboutPage.story.quote')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
