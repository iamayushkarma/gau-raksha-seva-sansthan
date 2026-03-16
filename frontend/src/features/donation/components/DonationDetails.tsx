import { useTranslation } from 'react-i18next';
import GauSevaSelect from '@/features/donation/components/GauSevaSelect';
import { FormInput } from '@/features/donation/components/FormInput';
import AmountSelect from '@/features/donation/components/AmountSelect';
import type { DonationDetailsProp } from '@/shared/types/formtypes';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import DonateNow from '@/shared/components/button/DonateNow';
import { payNow } from '@/shared/utils/payNow';

function DonationDetails({
  amount,
  error,
  onAmountChange,
  prefilledSeva,
}: DonationDetailsProp) {
  const {
    sevaValue,
    amount: mobileamount,
    name,
    phone,
    isAnonymous,
  } = useDonationFormContext();
  const { t } = useTranslation();
  return (
    <section className="mt-2.5 md:mt-8 select-none bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
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
        <div className="">
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
          <div className="sm:hidden mt-6 flex justify-end">
            <DonateNow
              size="sm"
              onClick={() =>
                payNow(
                  Number(mobileamount),
                  sevaValue,
                  name,
                  phone,
                  isAnonymous
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationDetails;
