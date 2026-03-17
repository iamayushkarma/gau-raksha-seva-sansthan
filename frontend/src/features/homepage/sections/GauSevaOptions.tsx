import { useEffect, useState } from 'react';
import axios from 'axios';
import DonateNow from '@/shared/components/button/DonateNow';
import { useTranslation } from 'react-i18next';
import useDonationFormContext from '@/shared/hooks/useDonationFormContext';
import { API_ENDPOINTS } from '@/core/config/api';
import Button from '@/shared/components/ui/Button';

interface DonationOption {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  amount: string;
  image: string;
}

const GauSevaOptions = () => {
  const { t, i18n } = useTranslation();
  const [options, setOptions] = useState<DonationOption[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSevaValue, handleAmountChange } = useDonationFormContext();

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.donationOptions)
      .then(({ data }) => setOptions(data.data || []))
      .catch(() => setOptions([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  const getTitle = (option: DonationOption) =>
    i18n.language === 'hi'
      ? option.title_hi || option.title_en
      : option.title_en;

  const getDescription = (option: DonationOption) =>
    i18n.language === 'hi'
      ? option.description_hi || option.description_en
      : option.description_en;

  const handleDonateClick = (option: DonationOption) => {
    setSevaValue(getTitle(option));
    handleAmountChange(option.amount);
    const el = document.getElementById('donation');
    console.log('Donation section:', el);
    document.getElementById('donation')?.scrollIntoView();
  };

  return (
    <section id="gau-seva" className="py-8 mt-8 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t('gauSeva.badge', 'Gau Seva')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            {t('gauSeva.title')}
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            {t('gauSeva.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {options.map((option) => (
            <div
              key={option.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface border border-border flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={option.image || 'https://placehold.co/600x600'}
                  alt={getTitle(option)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary text-text-primary px-3 py-1 rounded-full font-bold text-sm shadow">
                  ₹{option.amount}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-2">
                <h3 className="font-bold text-text-primary text-base leading-snug">
                  {getTitle(option)}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed flex-1">
                  {getDescription(option)}
                </p>
                <div className="pt-3 mt-auto">
                  <Button
                    className="bg-text-primary text-primary!"
                    onClick={() => handleDonateClick(option)}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GauSevaOptions;
