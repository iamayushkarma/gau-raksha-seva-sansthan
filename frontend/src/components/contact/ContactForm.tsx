import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // replace with your API call
    await new Promise((res) => setTimeout(res, 1000));
    setStatus('success');
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          {t('contactPage.form.title')}
        </h2>
        <p className="text-text-secondary">{t('contactPage.form.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            {t('contactPage.form.name_label')}
          </label>
          <input
            type="text"
            required
            placeholder={t('contactPage.form.name_placeholder')}
            className="w-full h-12 px-4 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            {t('contactPage.form.email_label')}
          </label>
          <input
            type="email"
            required
            placeholder={t('contactPage.form.email_placeholder')}
            className="w-full h-12 px-4 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            {t('contactPage.form.message_label')}
          </label>
          <textarea
            required
            rows={5}
            placeholder={t('contactPage.form.message_placeholder')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
        </div>

        {/* Status message */}
        {status === 'success' && (
          <p className="text-sm font-medium text-success bg-success/10 px-4 py-3 rounded-lg">
            {t('contactPage.form.success')}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-medium text-error bg-error/10 px-4 py-3 rounded-lg">
            {t('contactPage.form.error')}
          </p>
        )}

        <Button
          type="submit"
          disabled={loading}
          icon={<Send size={16} />}
          className="mt-1 inline-flex items-center justify-center gap-2 w-full h-14 bg-primary text-text-primary font-bold text-base hover:opacity-90 disabled:opacity-60 transition-opacity shadow-md"
        >
          {loading ? '...' : t('contactPage.form.submit')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
