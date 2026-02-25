import React from 'react';
import DonateNow from '@/components/common/button/DonateNow';
import { useTranslation } from 'react-i18next';

interface DonationOption {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: string;
}

const GauSevaOptions: React.FC = () => {
  const { t } = useTranslation();
  // Get translated donation options
  const translatedOptions = t('gauSeva.options', {
    returnObjects: true,
  }) as Omit<DonationOption, 'image'>[];

  // Add image separately (since image doesn’t change per language)
  const donationOptions: DonationOption[] = translatedOptions.map(
    (option, index) => ({
      ...option,
      image: 'https://placehold.co/600x400',
    })
  );

  // TODO
  // const handleDonate = (option: DonationOption): void => {
  //   console.log(`Donating for: ${option.title}`);
  //   // Add your donation logic here
  // };

  return (
    <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {t('gauSeva.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {t('gauSeva.description')}
          </p>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {donationOptions.map((option, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Amount Badge */}
                <div className="absolute top-4 right-4 bg-primary text-text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {option.amount}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2 opacity-90">
                  {option.description}
                </p>

                {/* Donate Button */}
                <DonateNow
                  scrollToId="donation-form"
                  className="md:group-hover:translate-y-0 md:translate-y-2 lg:opacity-0 md:group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GauSevaOptions;
