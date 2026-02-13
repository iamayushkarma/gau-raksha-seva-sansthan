import Checkbox from '@/components/ui/CheckBox';
import { FormInput } from '@/components/common/form/FormInput';
import { useState } from 'react';

function DonarInformation() {
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  return (
    <section className="bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">Donor Information</h2>
      </div>

      <fieldset
        disabled={isAnonymous}
        className={`mt-8 grid md:grid-cols-2 gap-4 
          ${isAnonymous ? 'opacity-50' : ''}`}
      >
        <FormInput
          label="Name"
          placeholder="Your Name"
          className={` ${isAnonymous ? 'cursor-not-allowed' : ''}`}
        />
        <FormInput
          label="Number"
          placeholder="Your Number"
          className={` ${isAnonymous ? 'cursor-not-allowed' : ''}`}
        />
        <FormInput
          label="Email"
          type="email"
          placeholder="Your Email"
          className={` ${isAnonymous ? 'cursor-not-allowed' : ''}`}
        />
        <FormInput
          label="Pincode"
          placeholder="Your City Pincode"
          className={` ${isAnonymous ? 'cursor-not-allowed' : ''}`}
        />
      </fieldset>

      <div className="flex items-center mt-4">
        <Checkbox
          id="anonymous"
          checked={isAnonymous}
          onChange={setIsAnonymous}
        />
        <label
          className="ml-2 text-sm text-text-muted select-none"
          htmlFor="anonymous"
        >
          Make this donation anonymous
        </label>
      </div>
    </section>
  );
}

export default DonarInformation;
