import { useTranslation } from 'react-i18next';
import { MapPin, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 flex flex-col gap-3">
          <MapPin size={28} className="text-primary" />
          <h3 className="font-bold text-base text-text-primary">
            {t('contactPage.info.address_title')}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {t('contactPage.info.address')}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 flex flex-col gap-3">
          <Phone size={28} className="text-primary" />
          <h3 className="font-bold text-base text-text-primary">
            {t('contactPage.info.contact_title')}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {t('contactPage.info.phone')}
            <br />
            {t('contactPage.info.email')}
          </p>
        </div>
      </div>

      {/* Map embed */}
      <div className="flex-1 min-h-75 w-full rounded-xl overflow-hidden border border-border relative bg-surface">
        <iframe
          title="Gaushala Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.5!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x7f2b7b2b2b2b2b2b!2sVaranasi%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1"
          className="w-full h-full absolute inset-0"
          style={{ border: 0, minHeight: '300px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Pin overlay */}
        <div className="absolute bottom-4 left-4 bg-surface px-3 py-2 rounded-lg shadow-md border border-border flex items-center gap-2">
          <MapPin size={16} className="text-primary shrink-0" />
          <span className="text-sm font-bold text-text-primary">
            {t('contactPage.info.map_label')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
