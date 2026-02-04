import React from 'react';
import DonateNow from '../common/button/DonateNow';

interface DonationOption {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: string;
}

const GauSevaOptions: React.FC = () => {
  const donationOptions: DonationOption[] = [
    {
      id: 1,
      title: 'First Roti for Cow',
      description: 'Provide the first meal of the day to hungry cows',
      image: 'https://placehold.co/600x400',
      amount: '₹51',
    },
    {
      id: 2,
      title: 'Adopt Cow for 1 Month',
      description: 'Sponsor complete care for a cow including food and shelter',
      image: 'https://placehold.co/600x400',
      amount: '₹2,100',
    },
    {
      id: 3,
      title: 'Cow Treatment Seva',
      description:
        'Support medical treatment and emergency care for injured cows',
      image: 'https://placehold.co/600x400',
      amount: '₹1,100',
    },
    {
      id: 4,
      title: 'Cow Shed Seva',
      description: 'Help build and maintain safe shelters for rescued cows',
      image: 'https://placehold.co/600x400',
      amount: '₹5,100',
    },
    {
      id: 5,
      title: 'Feed 20 Cows',
      description: 'Provide nutritious meals for multiple cows for a day',
      image: 'https://placehold.co/600x400',
      amount: '₹501',
    },
    {
      id: 6,
      title: 'Adopt Calf for 1 Month',
      description: 'Support the growth and care of young calves',
      image: 'https://placehold.co/600x400',
      amount: '₹1,500',
    },
    {
      id: 7,
      title: 'Medicines Kit for Cows',
      description: 'Provide essential medical supplies and medicines',
      image: 'https://placehold.co/600x400',
      amount: '₹3,100',
    },
    {
      id: 8,
      title: 'Green Fodder Seva',
      description:
        'Supply fresh, nutritious green fodder for healthy digestion',
      image: 'https://placehold.co/600x400',
      amount: '₹751',
    },
  ];

  const handleDonate = (option: DonationOption): void => {
    console.log(`Donating for: ${option.title}`);
    // Add your donation logic here
  };

  return (
    <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Ways to Support Gau Seva
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose a seva that resonates with your heart. Every contribution
            helps save and nurture Gau Mata
          </p>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {donationOptions.map((option) => (
            <div
              key={option.id}
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
                <DonateNow />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GauSevaOptions;
