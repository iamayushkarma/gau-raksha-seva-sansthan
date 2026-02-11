import { useState } from 'react';
import DonateNow from '../common/button/DonateNow';
import CopyField from '../ui/CopyField';
import DonarInformation from '../common/form/DonarInformation';
import DonationDetails from '../common/form/DonationDetails';

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
    <section className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-background">
      <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary mb-4">
        Support Gau Seva and help us care for cows in need
      </h2>
      {/* Form */}
      <div className="bg-background rounded-lg mt-16 content-center md:w-full grid lg:grid-cols-2 px-4 md:px-6 py-6">
        <div className="w-full lg:flex lg:flex-row">
          <form id="donation-form" action="">
            <DonarInformation />
            <DonationDetails
              amount={amount}
              error={error}
              onAmountChange={handleAmountChange}
            />
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
