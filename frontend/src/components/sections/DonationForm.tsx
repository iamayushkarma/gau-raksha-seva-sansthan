import DonateNow from '@/components/common/button/DonateNow';
import DonarInformation from '@/components/common/form/DonarInformation';
import DonationDetails from '@/components/common/form/DonationDetails';
import useDonationFormContext from '@/hooks/useDonationFormContext';
import SubmarrySection from '@/components/common/form/SubmarrySection';

function DonationForm() {
  const { handleAmountChange, amount, error } = useDonationFormContext();
  return (
    <section
      id="donation-form"
      className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-background"
    >
      <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary mb-4">
        Support Gau Seva and help us care for cows in need
      </h2>
      {/* Form */}
      <div className="bg-background lg:w-11/12 lg:mx-auto rounded-lg mt-16 content-center md:w-full grid lg:grid-cols-2 px-4 md:px-6 py-6">
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
