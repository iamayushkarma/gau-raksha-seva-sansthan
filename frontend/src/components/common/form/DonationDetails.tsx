import GauSevaSelect from '@/components/common/form/GauSevaSelect';
import { FormInput } from '@/components/common/form/FormInput';
import AmountSelect from '@/components/common/form/AmountSelect';
import type { DonationDetailsProp } from '@/types/formtypes';

function DonationDetails({
  amount,
  error,
  onAmountChange,
}: DonationDetailsProp) {
  return (
    <section className="mt-8 select-none bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">Donation Details</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="seva"
            className="block mb-2 font-medium text-text-primary"
          >
            Select Seva
          </label>

          <GauSevaSelect />
        </div>
        <div className="max-sm:mt-4">
          <FormInput
            label="Amount"
            type="string"
            value={amount}
            onChangeFunction={(e) => onAmountChange(e.target.value)}
            placeholder="Any amount"
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
