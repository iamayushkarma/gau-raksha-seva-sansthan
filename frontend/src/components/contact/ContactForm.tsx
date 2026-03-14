import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import { FormInput } from '@/components/common/form/FormInput';
import { API_ENDPOINTS } from '@/config/api';
import type { FormData, FormErrors } from '@/types/formtypes';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // only allow digits for phone
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    // max 10 digits for phone
    if (name === 'phone' && value.length > 10) return;

    setForm((prev) => ({ ...prev, [name]: value }));

    // clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t(
        'contactPage.form.error_name_required',
        'Name is required'
      );
    } else if (form.name.trim().length < 2) {
      newErrors.name = t(
        'contactPage.form.error_name_short',
        'Name must be at least 2 characters'
      );
    }

    if (!form.phone.trim()) {
      newErrors.phone = t(
        'contactPage.form.error_phone_required',
        'Phone number is required'
      );
    } else if (form.phone.length !== 10) {
      newErrors.phone = t(
        'contactPage.form.error_phone_length',
        'Phone number must be exactly 10 digits'
      );
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t(
        'contactPage.form.error_email_invalid',
        'Enter a valid email address'
      );
    }

    if (!form.message.trim()) {
      newErrors.message = t(
        'contactPage.form.error_message_required',
        'Message is required'
      );
    } else if (form.message.trim().length < 10) {
      newErrors.message = t(
        'contactPage.form.error_message_short',
        'Message must be at least 10 characters'
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post(API_ENDPOINTS.createQuery, form);
      toast.success(t('contactPage.form.success'));
      setForm({ name: '', phone: '', email: '', message: '' });
      setErrors({});
    } catch {
      toast.error(t('contactPage.form.error'));
    } finally {
      setLoading(false);
    }
  };

  const inputErrorClass = (field: keyof FormErrors) =>
    errors[field] ? 'border-error' : '';

  return (
    <section className="bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-primary">
          {t('contactPage.form.title')}
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <FormInput
              label={t('contactPage.form.name_label')}
              name="name"
              type="text"
              value={form.name}
              placeholder={t('contactPage.form.name_placeholder')}
              onChangeFunction={handleChange}
              className={inputErrorClass('name')}
            />
            {errors.name && (
              <p className="text-error text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col">
            <FormInput
              label={t('contactPage.form.phone_label')}
              name="phone"
              type="tel"
              value={form.phone}
              placeholder={t('contactPage.form.phone_placeholder')}
              onChangeFunction={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              className={inputErrorClass('phone')}
            />
            {errors.phone && (
              <p className="text-error text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email — optional */}
        <div className="flex flex-col">
          <label
            className="font-medium flex items-center gap-2"
            htmlFor="email"
          >
            {t('contactPage.form.email_label')}
            <span className="text-xs font-normal text-text-tertiary">
              ({t('contactPage.form.optional', 'Optional')})
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('contactPage.form.email_placeholder')}
            className={`placeholder:text-sm w-full rounded-lg font-medium mt-2 border-2 focus:border-text-secondary bg-surface px-4 py-2 focus:outline-none ${errors.email ? 'border-error' : 'border-text-primary/30'}`}
          />
          {errors.email && (
            <p className="text-error text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="message">
            {t('contactPage.form.message_label')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder={t('contactPage.form.message_placeholder')}
            className={`placeholder:text-sm w-full rounded-lg font-medium mt-2 border-2 focus:border-text-secondary bg-surface px-4 py-2 focus:outline-none resize-none ${errors.message ? 'border-error' : 'border-text-primary/30'}`}
          />
          {errors.message && (
            <p className="text-error text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          icon={<Send size={16} />}
          className="mt-2 inline-flex items-center justify-center gap-2 w-full h-14 bg-primary text-text-primary font-bold text-base hover:opacity-90 disabled:opacity-60 transition-opacity shadow-md"
        >
          {loading ? '...' : t('contactPage.form.submit')}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
