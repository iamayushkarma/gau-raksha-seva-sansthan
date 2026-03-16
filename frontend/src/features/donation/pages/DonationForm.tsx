import { useTranslation } from 'react-i18next';
import DonarInformation from '@/features/donation/components/DonarInformation';
import DonationDetails from '@/features/donation/components/DonationDetails';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import SubmarrySection from '@/features/donation/components/SubmarrySection';

function DonationForm() {
  const { t } = useTranslation();
  const { handleAmountChange, amount, error } = useDonationFormContext();
  return (
    <section
      id="donation-form"
      className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-linear-to-b from-primary-lighter/60 to-background"
    >
      <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary mb-4">
        {t('donationForm.main_title')}
      </h2>
      {/* Form */}
      <div className=" lg:w-11/12 lg:mx-auto rounded-lg mt-16 content-center md:w-full grid lg:grid-cols-2 px-4 md:px-6 py-6">
        <div className="w-full lg:flex lg:flex-row">
          <form action="">
            <DonarInformation />
            <DonationDetails
              amount={amount}
              error={error}
              onAmountChange={handleAmountChange}
            />
          </form>
        </div>
        <SubmarrySection />
      </div>
    </section>
  );
}

export default DonationForm;
