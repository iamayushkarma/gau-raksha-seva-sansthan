import { Flag, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function MissionVisionCards() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mission Card */}
      <div className="bg-surface-light p-6 rounded-xl border border-border hover:border-primary/40 transition-colors shadow-md hover:shadow-lg group">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Flag className="text-primary-dark group-hover:text-text-on-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-text-primary">
          {t('about.mission_title')}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {t('about.mission_desc')}
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-surface-light p-6 rounded-xl border border-border hover:border-primary/40 transition-colors shadow-md hover:shadow-lg group">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Eye className="text-primary-dark group-hover:text-text-on-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-text-primary">
          {t('about.vision_title')}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {t('about.vision_desc')}
        </p>
      </div>
    </div>
  );
}

export default MissionVisionCards;
