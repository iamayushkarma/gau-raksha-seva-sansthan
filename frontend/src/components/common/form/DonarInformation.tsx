import Checkbox from '@/components/ui/CheckBox';
import { FormInput } from '@/components/common/form/FormInput';
import { useTranslation } from 'react-i18next';
import useDonationFormContext from '@/hooks/useDonationFormContext';

function DonarInformation() {
  const { t } = useTranslation();
  const { name, setName, phone, setPhone, isAnonymous, setIsAnonymous } =
    useDonationFormContext();

  return (
    <section className="bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">
          {t('donationForm.donor_info_title')}
        </h2>
      </div>
      <fieldset
        disabled={isAnonymous}
        className={`mt-8 grid md:grid-cols-2 gap-4 ${isAnonymous ? 'opacity-50' : ''}`}
      >
        <FormInput
          label={t('donationForm.name')}
          placeholder={t('donationForm.name_placeholder')}
          value={name}
          onChangeFunction={(e) => setName(e.target.value)}
          className={isAnonymous ? 'cursor-not-allowed' : ''}
        />
        <FormInput
          label={t('donationForm.number')}
          placeholder={t('donationForm.number_placeholder')}
          value={phone}
          onChangeFunction={(e) => setPhone(e.target.value)}
          className={isAnonymous ? 'cursor-not-allowed' : ''}
        />
      </fieldset>
      <div className="flex items-center mt-4">
        <Checkbox
          id="anonymous"
          checked={isAnonymous}
          onChange={setIsAnonymous}
        />
        <label
          className="ml-2 text-sm text-text-muted select-none"
          htmlFor="anonymous"
        >
          {t('donationForm.anonymous')}
        </label>
      </div>
    </section>
  );
}

export default DonarInformation;
