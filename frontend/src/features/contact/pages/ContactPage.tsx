import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Button from '@/shared/components/ui/Button';
import ContactHero from '@/features/contact/components/ContactHero';
import ContactForm from '@/features/contact/components/ContactForm';
import ContactInfo from '@/features/contact/components/ContactInfo';

const ContactPage = () => {
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
          {t('contactPage.back')}
        </Button>
      </div>

      {/* Hero */}
      <ContactHero />

      {/* Form + Info */}
      <div className="px-4 md:px-20 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
