import { useTranslation } from 'react-i18next';
import DonarInformation from '@/components/common/form/DonarInformation';
import DonationDetails from '@/components/common/form/DonationDetails';
import useDonationFormContext from '@/hooks/useDonationFormContext';
import SubmarrySection from '@/components/common/form/SubmarrySection';

function Donation() {
  const { t } = useTranslation();
  const { handleAmountChange, amount, error, sevaValue } =
    useDonationFormContext();
  return (
    <section
      id="donation-form"
      className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-linear-to-b from-primary-lighter/60 to-background"
    >
      <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary mb-4">
        {t('donationForm.main_title')}
      </h2>
      {/* Form */}
      <div className="lg:w-11/12 lg:mx-auto rounded-lg md:mt-10 content-center md:w-full grid lg:grid-cols-2 px-4 md:px-6 py-6">
        <div className="w-full lg:flex lg:flex-row">
          <form action="">
            <DonarInformation />
            <DonationDetails
              amount={amount}
              error={error}
              prefilledSeva={sevaValue}
              onAmountChange={handleAmountChange}
            />
          </form>
        </div>
        <SubmarrySection />
      </div>
    </section>
  );
}

export default Donation;
