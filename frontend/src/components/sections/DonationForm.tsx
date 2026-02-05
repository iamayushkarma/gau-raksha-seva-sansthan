import { useState } from 'react';
import GauSevaSelect from '../common/form/GauSevaSelect';
import AmountSelect from '../common/form/AmountSelect';

function DonationForm() {
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const MIN_DONATION = 1;
  function handleAmountChange(value: string) {
    // Allow only digits
    if (!/^\d*$/.test(value)) return;

    setAmount(value);

    if (value === '') {
      setError('');
      return;
    }

    if (Number(value) < MIN_DONATION) {
      setError('Amount must be greater than zero');
    } else {
      setError('');
    }
  }

  return (
    <section
      className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-linear-to-t
            from-[rgba(92,77,26,0.45)]
            via-[rgba(255,222,77,0.22)]
            to-transparent select-none"
    >
      <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary mb-4">
        Support Gau Seva and help us care for cows in need
      </h2>
      {/* Form */}
      <div className="bg-background rounded-lg mt-16 w-full flex flex-row px-4 md:px-6 py-6">
        <div className="lg:w-1/2 flex flex-row">
          <form id="donation-form" action="">
            <div className="flex flex-col lg:flex-row md:gap-3">
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
                <label className="font-medium" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="Any amount"
                  className={`w-full rounded-lg font-medium mt-2 border-2 bg-surface px-4 py-2 focus:outline-none
                  ${
                    error
                      ? 'border-error'
                      : 'border-text-primary/30 focus:border-text-secondary'
                  }`}
                />

                {error && <p className="text-error text-sm mt-1">{error}</p>}
              </div>
            </div>
            <AmountSelect
              onSelect={handleAmountChange}
              selectedAmount={amount}
            />
          </form>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default DonationForm;
