import { Heart, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function WhatMakesUsDifferent() {
  const { t } = useTranslation();
  return (
    <div className="bg-primary/5 p-6 sm:p-8 rounded-xl">
      <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <Heart className="text-primary" />
        {t('about.different_title')}
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              {t('about.feature1_title')}
            </strong>
            <span className="text-sm text-text-tertiary">
              {t('about.feature1_desc')}
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              {t('about.feature2_title')}
            </strong>
            <span className="text-sm text-text-tertiary">
              {t('about.feature2_desc')}
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              {t('about.feature3_title')}
            </strong>
            <span className="text-sm text-text-tertiary">
              {t('about.feature3_desc')}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhatMakesUsDifferent;
