import { QrCode } from 'lucide-react';
import useDonationFormContext from '@/hooks/useDonationFormContext';
import DonateNow from '@/components/common/button/DonateNow';
import { payNow } from '@/utils/functions/payNow';

function SubmarrySection() {
  const { sevaValue, amount } = useDonationFormContext();
  return (
    <div className="bg-surface border border-divider  relative shadow-md lg:max-w-lg overflow-hidden mx-auto rounded-lg px-6 py-4 max-sm:mt-6 w-full">
      <div className="absolute inset-0 h-1.5 bg-linear-to-r from-primary to-secondary"></div>
      {/* User detail */}
      <div className="py-6 border-b-2 border-dashed border-divider">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-text-primary">Summarys</h2>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="mt-4 text-text-primary">Support Category</h3>
          {sevaValue || 'select one'}
        </div>
      </div>
      {/* Total Contribution */}
      <div className="flex justify-between items-center">
        <h3 className="mt-4 text-md text-text-primary font-semibold">
          Total Contribution
        </h3>
        <span className="mt-4 text-md text-text-primary font-semibold">
          {amount ? `₹ ${amount}` : '₹ 0'}
        </span>
      </div>
      {/* QR code */}
      <div className="p-5 mt-5 bg-primary/10 rounded-lg flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <QrCode className="size-4" />
          <p>Scan to Pay Instantly</p>
        </div>
        <div className="mx-auto mt-4 border-8 border-white rounded-lg overflow-hidden">
          <img src="https://placehold.co/200x200" />
        </div>
        <p className="text-center mt-4 text-sm text-text-secondary font-medium">
          Supports Google Pay, Phone Pay & Banking Apps
        </p>
      </div>
      {/* Submit button */}
      <div className="mt-6">
        <DonateNow onClick={() => payNow(Number(amount))} />
      </div>
    </div>
  );
}

export default SubmarrySection;
