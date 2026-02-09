import { useState } from 'react';
import GauSevaSelect from '../common/form/GauSevaSelect';
import AmountSelect from '../common/form/AmountSelect';
import DonateNow from '../common/button/DonateNow';
import CopyField from '../ui/CopyField';

type InputFormPropType = {
  label: string;
  onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

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
      <div className="bg-background rounded-lg mt-16 content-center md:w-full grid md:grid-cols-2 px-4 md:px-6 py-6">
        <div className="w-full lg:flex lg:flex-row">
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
                <FormInput
                  label="Amount"
                  type="string"
                  value={amount}
                  onChangeFunction={(e) => handleAmountChange(e.target.value)}
                  placeholder="Any amount"
                  className={error && 'border-error'}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />

                {error && <p className="text-error text-sm mt-1">{error}</p>}
              </div>
            </div>
            <AmountSelect
              onSelect={handleAmountChange}
              selectedAmount={amount}
            />
            {/* Other inputs */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {/* Name */}
              <FormInput label="Name" placeholder="Your Name" />
              {/* Number */}
              <FormInput label="Number" placeholder="Your Number" />
              {/* Email */}
              <FormInput label="Email" type="email" placeholder="Your Email" />
              {/* Pincode */}
              <FormInput
                label="Pincode"
                placeholder="Your City Pincode"
                max={6}
                min={6}
              />
            </div>
            {/* Submit button */}
            <div className="mt-6">
              <DonateNow />
            </div>
          </form>
        </div>
        <div className="bg-primary/15 rounded-lg px-6 py-4 max-sm:mt-6 w-full">
          <div className="flex justify-between ">
            <div>
              <h3 className="font-bold text-[0.9rem] sm:text-md md:text-lg">
                For UPI & QR
              </h3>
              <img
                className="size-40 mt-3"
                src="https://placehold.co/400x400"
              />
              {/* copy feild */}
              <div className="w-36 mt-2">
                <CopyField text="demobank@bank" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[0.9rem] sm:text-md md:text-lg">
                For Bank Transfer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationForm;

function FormInput({
  onChangeFunction,
  className,
  label,
  ...rest
}: InputFormPropType) {
  return (
    <div className="flex flex-col">
      <label className="font-medium" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        onChange={onChangeFunction}
        className={`${className} placeholder:text-sm w-full rounded-lg font-medium mt-2 border-2 border-text-primary/30 focus:border-text-secondary bg-surface px-4 py-2 focus:outline-none`}
        {...rest}
      />
    </div>
  );
}
