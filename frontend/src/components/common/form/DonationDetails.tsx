import GauSevaSelect from '@/components/common/form/GauSevaSelect';
import { FormInput } from '@/components/common/form/FormInput';
import AmountSelect from '@/components/common/form/AmountSelect';
import type { DonationDetailsProp } from '@/types/formtypes';

function DonationDetails({
  amount,
  error,
  onAmountChange,
}: DonationDetailsProp) {
  return (
    <section className="mt-8 bg-surface border rounded-xl shadow-sm border-divider p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
        <h2 className="text-xl font-bold text-text-deep">Donation Details</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="seva"
            className="block mb-2 font-medium text-text-primary"
          >
            Select Seva
          </label>

          <GauSevaSelect />
        </div>
        <div className="max-sm:mt-4">
          <FormInput
            label="Amount"
            type="string"
            value={amount}
            onChangeFunction={(e) => onAmountChange(e.target.value)}
            placeholder="Any amount"
            className={error && 'border-error'}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          {error && <p className="text-error text-sm mt-1">{error}</p>}
          <AmountSelect onSelect={onAmountChange} selectedAmount={amount} />
          <div className="mt-8">
            <label
              className="block text-sm font-semibold text-text-deep mb-2"
              htmlFor="message"
            >
              Message of Support (Optional)
            </label>
            <textarea
              className="w-full px-4 py-3 h-28 resize-none rounded-lg border-2 border-text-primary/30 focus:border-text-secondary bg-background text-text-deep placeholder-text-muted/50"
              id="message"
              placeholder="Add any message, prayer, or special request..."
              rows={3}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationDetails;

// <!DOCTYPE html>
// <html lang="en"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>Healthcare Support Form - Warm Theme</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     colors: {
//                         "primary": "#ffde4d",
//                         "primary-content": "#2d2400",
//                         "secondary": "#ff9d4d",
//                         "background-warm": "#fff9ee",
//                         "surface-warm": "#fffaed",
//                         "border-warm": "#f5e6b8",
//                         "divider-warm": "#ede4cc",
//                         "text-deep": "#2d2400",
//                         "text-muted": "#5c4d1a"
//                     },
//                     fontFamily: {
//                         "display": ["Manrope", "sans-serif"]
//                     },
//                     borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
//                 },
//             },
//         }
//     </script>
// <style type="text/tailwindcss">::-webkit-scrollbar {
//             width: 8px;
//         }
//         ::-webkit-scrollbar-track {
//             background: transparent;
//         }
//         ::-webkit-scrollbar-thumb {
//             background: #f5e6b8;
//             border-radius: 4px;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//             background: #ffde4d;
//         }
//         .glass-panel {
//             background: rgba(255, 250, 237, 0.7);
//             backdrop-filter: blur(10px);
//             border: 1px solid #f5e6b8;
//         }
//         input, select, textarea, button {
//             transition: all 0.2s ease-in-out;
//         }
//         input:focus, select:focus, textarea:focus {
//             outline: none;
//             box-shadow: 0 0 0 2px #ffde4d;
//             border-color: #ffde4d;
//         }
//     </style>
// </head>
// <body class="bg-background-warm text-text-deep font-display antialiased min-h-screen flex flex-col">
// <header class="w-full bg-surface-warm border-b border-divider-warm sticky top-0 z-50">
// <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// <div class="flex justify-between items-center h-20">
// <div class="flex items-center gap-2">
// <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-deep">
// <span class="material-icons">medical_services</span>
// </div>
// <div class="flex flex-col">
// <span class="text-xl font-bold tracking-tight text-text-deep leading-none">MediCare</span>
// <span class="text-xs text-text-muted font-medium tracking-wider uppercase mt-0.5">Global Foundation</span>
// </div>
// </div>
// <nav class="hidden md:flex items-center space-x-4">
// <div class="flex items-center text-text-deep font-bold">
// <span class="w-6 h-6 rounded-full bg-primary text-primary-content text-xs flex items-center justify-center mr-2">1</span>
//                     Details
//                 </div>
// <div class="w-12 h-0.5 bg-divider-warm"></div>
// <div class="flex items-center text-text-muted font-medium">
// <span class="w-6 h-6 rounded-full border border-border-warm text-xs flex items-center justify-center mr-2">2</span>
//                     Payment
//                 </div>
// <div class="w-12 h-0.5 bg-divider-warm"></div>
// <div class="flex items-center text-text-muted font-medium">
// <span class="w-6 h-6 rounded-full border border-border-warm text-xs flex items-center justify-center mr-2">3</span>
//                     Confirmation
//                 </div>
// </nav>
// <div class="w-10"></div>
// </div>
// </div>
// </header>
// <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
// <div class="mb-10 text-center max-w-2xl mx-auto">
// <h1 class="text-3xl sm:text-4xl font-extrabold text-text-deep mb-3">Support Our Healthcare Initiatives</h1>
// <p class="text-lg text-text-muted">Your contribution directly saves lives. Please fill in your details below to proceed securely.</p>
// </div>
// <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
// <section class="lg:col-span-7 space-y-8">
// <div class="bg-surface-warm rounded-xl shadow-sm border border-border-warm p-6 sm:p-8">
// <div class="flex items-center gap-3 mb-6 pb-4 border-b border-divider-warm">
// <span class="material-icons text-secondary text-2xl">person_outline</span>
// <h2 class="text-xl font-bold text-text-deep">Donor Information</h2>
// </div>
// <div class="space-y-6">
// <div>
// <label class="block text-sm font-semibold text-text-deep mb-2" for="fullName">Full Name</label>
// <input class="w-full px-4 py-3 rounded-lg border border-border-warm bg-white text-text-deep placeholder-text-muted/50" id="fullName" placeholder="e.g. Sarah Mitchell" type="text"/>
// </div>
// <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
// <div>
// <label class="block text-sm font-semibold text-text-deep mb-2" for="email">Email Address</label>
// <input class="w-full px-4 py-3 rounded-lg border border-border-warm bg-white text-text-deep placeholder-text-muted/50" id="email" placeholder="sarah@example.com" type="email"/>
// </div>
// <div>
// <label class="block text-sm font-semibold text-text-deep mb-2" for="phone">Phone Number</label>
// <input class="w-full px-4 py-3 rounded-lg border border-border-warm bg-white text-text-deep placeholder-text-muted/50" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
// </div>
// </div>
// <div class="flex items-center">
// <input class="h-4 w-4 text-secondary focus:ring-secondary border-border-warm rounded" id="anonymous" type="checkbox"/>
// <label class="ml-2 block text-sm text-text-muted" for="anonymous">
//                             Make this donation anonymous
//                         </label>
// </div>
// </div>
// </div>
// <div class="bg-surface-warm rounded-xl shadow-sm border border-border-warm p-6 sm:p-8">
// <div class="flex items-center gap-3 mb-6 pb-4 border-b border-divider-warm">
// <span class="material-icons text-secondary text-2xl">favorite_border</span>
// <h2 class="text-xl font-bold text-text-deep">Donation Details</h2>
// </div>
// <div class="space-y-6">
// <div>
// <label class="block text-sm font-semibold text-text-deep mb-2" for="category">Support Category</label>
// <div class="relative">
// <select class="w-full px-4 py-3 rounded-lg border border-border-warm bg-white text-text-deep appearance-none cursor-pointer" id="category">
// <option disabled="" selected="" value="">Select a cause to support...</option>
// <option value="medical_supplies">Medical Supplies &amp; Equipment</option>
// <option value="surgery_support">Pediatric Surgery Support</option>
// <option value="vaccination">Vaccination Drives</option>
// <option value="general_aid">General Humanitarian Aid</option>
// </select>
// <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
// <span class="material-icons">expand_more</span>
// </div>
// </div>
// </div>
// <div>
// <label class="block text-sm font-semibold text-text-deep mb-3">Donation Amount</label>
// <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
// <button class="py-2 px-4 rounded-lg border border-primary bg-primary text-primary-content font-bold shadow-sm" type="button">$25</button>
// <button class="py-2 px-4 rounded-lg border border-border-warm bg-white text-text-muted font-medium hover:border-primary hover:text-text-deep transition-colors" type="button">$50</button>
// <button class="py-2 px-4 rounded-lg border border-border-warm bg-white text-text-muted font-medium hover:border-primary hover:text-text-deep transition-colors" type="button">$100</button>
// <button class="py-2 px-4 rounded-lg border border-border-warm bg-white text-text-muted font-medium hover:border-primary hover:text-text-deep transition-colors" type="button">$500</button>
// </div>
// <div class="relative rounded-lg shadow-sm">
// <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
// <span class="text-text-muted text-lg font-medium">$</span>
// </div>
// <input class="block w-full rounded-lg border border-border-warm pl-10 pr-4 py-4 text-lg bg-white text-text-deep placeholder-text-muted/50" id="amount" name="amount" placeholder="Enter custom amount" type="number"/>
// <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
// <span class="text-text-muted text-sm">USD</span>
// </div>
// </div>
// </div>
// <div>

// </div>
// </div>
// </div>
// </section>
// <aside class="lg:col-span-5 relative h-full">
// <div class="sticky top-24 space-y-6">
// <div class="bg-surface-warm rounded-xl shadow-lg border border-border-warm p-6 overflow-hidden relative">
// <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
// <h3 class="text-lg font-bold text-text-deep mb-6 mt-2">Summary</h3>
// <div class="space-y-3 mb-8">
// <div class="flex justify-between items-center text-sm text-text-muted">
// <span>Support Category</span>
// <span class="font-medium text-text-deep">Medical Supplies</span>
// </div>
// <div class="flex justify-between items-center text-sm text-text-muted">
// <span>Platform Fee</span>
// <span class="font-medium text-secondary">Covered by Sponsor</span>
// </div>
// <div class="w-full border-t border-dashed border-divider-warm my-4"></div>
// <div class="flex justify-between items-end">
// <span class="font-bold text-text-deep">Total Contribution</span>
// <span class="text-3xl font-extrabold text-secondary">$25.00</span>
// </div>
// </div>
// <div class="bg-primary/10 rounded-xl border border-primary/30 p-5 mb-6 text-center">
// <p class="text-sm font-semibold text-text-deep mb-4 flex items-center justify-center gap-2">
// <span class="material-icons text-base">qr_code_scanner</span>
//                             Scan to Pay Instantly
//                         </p>
// <div class="bg-white p-2 rounded-lg inline-block shadow-sm">
// <img alt="Payment QR code for instant donation" class="w-32 h-32 rounded" data-alt="Black and white QR code pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWgTPpGUYvQrWydKkG-iDbl0pF4AFNlC3z5fVYCay3-YQ7S4qPor5p5XTQAAc7J1XLRj--Q9gfE33mZTsfQEZIfUcqBF6s_W8Uzc-aw1CgFwnr4b2zCM51yvb1RICZF2pd-2OfggIO35RlcEEG-wS7Ti4arPyjHr-gjCc8jy2YU4ArwKn9R0J4NseswdtqfL98uV3AEboXko-zo9_OS0RgH2Tl-E8eMkxqhGArR3NwisY6Hxrwh_tYHUEp0DwyzWLqLa5RJ6Ah0IE"/>
// </div>
// <p class="text-xs text-text-muted mt-3">Supports Apple Pay, Google Pay &amp; Banking Apps</p>
// </div>
// <div class="bg-divider-warm/30 rounded-lg p-4 border border-border-warm mb-6">
// <div class="flex items-start gap-3">
// <span class="material-icons text-text-muted mt-0.5">account_balance</span>
// <div>
// <h4 class="text-sm font-bold text-text-deep">Bank Transfer</h4>
// <p class="text-xs text-text-muted mt-1">Beneficiary: Medicare NGO</p>
// <p class="text-xs text-text-muted font-mono mt-0.5">IBAN: US89 3704 0044 0532 0130 00</p>
// </div>
// </div>
// </div>
// <button class="w-full bg-primary hover:bg-primary/90 text-primary-content font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group">
// <span>Complete Donation</span>
// <span class="material-icons text-primary-content/80 group-hover:translate-x-1 transition-transform">arrow_forward</span>
// </button>
// <div class="mt-4 text-center">
// <div class="flex items-center justify-center gap-2 text-xs text-text-muted">
// <span class="material-icons text-sm">lock</span>
// <span>256-bit SSL Secure Payment</span>
// </div>
// </div>
// </div>
// <div class="flex justify-center items-center gap-6 opacity-80 hover:opacity-100 transition-all duration-500">
// <div class="flex items-center gap-1">
// <span class="material-icons text-text-muted">verified_user</span>
// <span class="text-xs font-bold text-text-muted">Verified NGO</span>
// </div>
// <div class="flex items-center gap-1">
// <span class="material-icons text-text-muted">receipt_long</span>
// <span class="text-xs font-bold text-text-muted">Tax Deductible</span>
// </div>
// </div>
// </div>
// </aside>
// </div>
// </main>
// <footer class="bg-surface-warm border-t border-divider-warm mt-auto">
// <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// <div class="flex flex-col md:flex-row justify-between items-center gap-4">
// <p class="text-sm text-text-muted">© 2023 Medicare Global Foundation. All rights reserved.</p>
// <div class="flex space-x-6">
// <a class="text-text-muted hover:text-secondary transition-colors text-sm" href="#">Privacy Policy</a>
// <a class="text-text-muted hover:text-secondary transition-colors text-sm" href="#">Terms of Service</a>
// <a class="text-text-muted hover:text-secondary transition-colors text-sm" href="#">Contact Support</a>
// </div>
// </div>
// </div>
// </footer>

// </body></html>
