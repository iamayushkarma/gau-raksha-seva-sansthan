import { QrCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import DonateNow from '@/shared/components/button/DonateNow';
import { payNow } from '@/shared/utils/payNow';
import { useState } from 'react';

function SubmarrySection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { sevaValue, amount, name, phone, isAnonymous } =
    useDonationFormContext();
  return (
    <div className="bg-surface border border-divider  relative shadow-md lg:max-w-lg overflow-hidden mx-auto rounded-lg px-6 py-4 max-sm:mt-6 w-full">
      <div className="absolute inset-0 h-1.5 bg-linear-to-r from-primary to-secondary"></div>
      {/* User detail */}
      <div className="pb-6 border-b-2 border-dashed border-divider">
        <div className="flex items-center gap-3 mt-4">
          <h2 className="text-xl font-semibold text-text-primary">
            {t('donationForm.summary.title')}
          </h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-text-primary">
            {t('donationForm.summary.support_category')}
          </h3>
          {sevaValue || t('donationForm.summary.select_one')}
        </div>
      </div>
      {/* Total Contribution */}
      <div className="flex justify-between items-center">
        <h3 className="mt-4 text-md text-text-primary font-semibold">
          {t('donationForm.summary.total_contribution')}
        </h3>
        <span className="mt-4 text-md text-text-primary font-semibold">
          {amount ? `₹ ${amount}` : '₹ 0'}
        </span>
      </div>
      {/* QR code */}
      <div className="p-5 mt-5 bg-primary/10 rounded-lg flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <QrCode className="size-4" />
          <p>{t('donationForm.summary.scan_to_pay')}</p>
        </div>
        <div className="mx-auto max-w-60 mt-4 border-4  rounded-lg overflow-hidden">
          <img
            src="/images/payment-qr.png"
            onClick={() => setOpen(true)}
            className="cursor-pointer "
            alt="QR Code"
          />
        </div>
        <p className="text-center mt-4 text-sm text-text-secondary font-medium">
          {t('donationForm.summary.payment_methods')}
        </p>
      </div>
      {/* Submit button */}
      <div className="mt-6 hidden sm:flex">
        <DonateNow
          className="w-full"
          onClick={() =>
            payNow(Number(amount), sevaValue, name, phone, isAnonymous)
          }
        />
      </div>
      {/* QR modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/payment-qr.png"
              className="max-w-[80vw] max-h-[80vh] rounded-lg border-8 border-[#0d0d0d]"
              alt="QR Full"
            />

            <a
              href="/images/payment-qr.png"
              download
              className="mt-4 block text-center bg-primary text-white py-2 px-4 rounded-lg"
            >
              Download QR
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmarrySection;
