import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  FileText,
  HandHeart,
  AlertCircle,
  Scale,
  Ban,
  Phone,
} from 'lucide-react';
import Button from '@/shared/components/ui/Button';

const SECTION_ICONS = [
  <HandHeart size={20} />,
  <FileText size={20} />,
  <AlertCircle size={20} />,
  <Scale size={20} />,
  <Ban size={20} />,
  <Phone size={20} />,
];

const SECTION_KEYS = [
  'acceptance',
  'donations',
  'usage',
  'ip',
  'liability',
  'disputes',
];

const TermsOfService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Back Button */}
      <div className="px-4 md:px-20 pt-6">
        <Button
          onClick={() => navigate(-1)}
          icon={
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          }
          className="inline-flex flex-row-reverse items-center gap-2 text-text-secondary hover:text-text-primary font-semibold text-sm transition-colors bg-transparent group"
        >
          {t('termsOfService.back')}
        </Button>
      </div>

      {/* Header */}
      <section className="px-4 md:px-20 py-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-1 w-12 bg-primary rounded-full"></span>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t('termsOfService.badge')}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          {t('termsOfService.title')}
        </h1>
        <p className="text-text-secondary">{t('termsOfService.subtitle')}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-lg">
          <FileText size={15} className="text-primary" />
          <span className="text-sm font-medium text-text-secondary">
            {t('termsOfService.last_updated')}
          </span>
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 md:px-20 pb-16 max-w-4xl mx-auto flex flex-col gap-6">
        {SECTION_KEYS.map((key, i) => {
          const items = t(`termsOfService.sections.${key}.items`, {
            returnObjects: true,
          }) as string[];
          return (
            <div
              key={key}
              className="bg-surface border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {SECTION_ICONS[i]}
                </div>
                <h2 className="text-lg font-bold text-text-primary">
                  {t(`termsOfService.sections.${key}.title`)}
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TermsOfService;
