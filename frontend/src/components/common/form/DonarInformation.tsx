import Checkbox from '@/components/ui/CheckBox';
import { FormInput } from '@/components/common/form/FormInput';

function DonarInformation() {
  return (
    <section className="bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">Donor Information</h2>
      </div>
      <div className="mt-8 grid  md:grid-cols-2 gap-4 ">
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
        {/* Anonymous donation */}
        <div className="flex items-center justify-center">
          <Checkbox id="anonymous" />
          <label
            className="ml-2 block text-sm text-text-muted"
            htmlFor="anonymous"
          >
            Make this donation anonymous
          </label>
        </div>
      </div>
    </section>
  );
}

export default DonarInformation;
