import { Heart, Check } from 'lucide-react';

function WhatMakesUsDifferent() {
  return (
    <div className="bg-primary/5 p-6 sm:p-8 rounded-xl">
      <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <Heart className="text-primary" />
        What Makes Us Different
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              24/7 Emergency Rescue & Medical Care
            </strong>
            <span className="text-sm text-text-tertiary">
              Immediate ambulance service for injured street cows.
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              Organic Fodder & Clean Environment
            </strong>
            <span className="text-sm text-text-tertiary">
              Nutritious, chemical-free diet and hygienic shelters.
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="text-text-on-primary w-3.5 h-3.5" />
          </span>
          <div>
            <strong className="block text-text-primary">
              Lifetime Sanctuary
            </strong>
            <span className="text-sm text-text-tertiary">
              Old and non-milking cows are cared for until their last breath.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhatMakesUsDifferent;
