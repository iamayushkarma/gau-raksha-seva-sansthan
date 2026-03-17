import { useTranslation } from 'react-i18next';
import DonarInformation from '@/features/donation/components/DonarInformation';
import DonationDetails from '@/features/donation/components/DonationDetails';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import SubmarrySection from '@/features/donation/components/SubmarrySection';
import { ArrowLeft } from 'lucide-react';
import Button from '@/shared/components/ui/Button';
import { useNavigate } from 'react-router-dom';

function DonationForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleAmountChange, amount, error } = useDonationFormContext();
  return (
    <>
      {/* Back Button */}
      <div className="px-4 md:px-20 pt-6 absolute z-40 max-sm:top-12 bg-b">
        <Button
          onClick={() => navigate(-1)}
          icon={
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          }
          className="max-sm:px-3! max-sm:py-1.5! inline-flex flex-row-reverse items-center gap-2 text-text-secondary hover:text-text-primary font-semibold text-sm transition-colors bg-white group"
        >
          {t('privacyPolicy.back')}
        </Button>
      </div>
      <section
        id="donation-form"
        className="relative py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-linear-to-b from-primary-lighter/60 to-background"
      >
        <h2 className="text-center text-3xl lg:w-1/2 mx-auto md:text-5xl font-bold text-text-primary">
          {t('donationForm.main_title')}
        </h2>
        {/* Form */}
        <div className=" lg:w-11/12 lg:mx-auto rounded-lg mt-2 content-center md:w-full grid lg:grid-cols-2 px-4 md:px-6 py-6">
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
    </>
  );
}

export default DonationForm;
