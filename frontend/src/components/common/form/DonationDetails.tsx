import { useTranslation } from 'react-i18next';
import GauSevaSelect from '@/components/common/form/GauSevaSelect';
import { FormInput } from '@/components/common/form/FormInput';
import AmountSelect from '@/components/common/form/AmountSelect';
import type { DonationDetailsProp } from '@/types/formtypes';

function DonationDetails({
  amount,
  error,
  onAmountChange,
  prefilledSeva,
}: DonationDetailsProp) {
  const { t } = useTranslation();
  return (
    <section className="mt-8 select-none bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">
          {t('donationForm.donation_details_title')}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {prefilledSeva ? (
          <FormInput
            label={t('donationForm.select_seva')}
            value={prefilledSeva}
            readOnly
            className="bg-gray-100 cursor-not-allowed opacity-70"
          />
        ) : (
          <GauSevaSelect />
        )}
        <div className="max-sm:mt-4">
          <FormInput
            label={t('donationForm.amount')}
            placeholder={t('donationForm.amount_placeholder')}
            type="string"
            value={amount}
            onChangeFunction={(e) => onAmountChange(e.target.value)}
            className={error && 'border-error'}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          {error && <p className="text-error text-sm mt-1">{error}</p>}
          <AmountSelect onSelect={onAmountChange} selectedAmount={amount} />
        </div>
      </div>
    </section>
  );
}

export default DonationDetails;
