import { useEffect, useState } from 'react';
import axios from 'axios';
import DonateNow from '@/components/common/button/DonateNow';
import { useTranslation } from 'react-i18next';

interface DonationOption {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  amount: string;
  image: string;
}

const GauSevaOptions: React.FC = () => {
  const { i18n } = useTranslation();
  const [options, setOptions] = useState<DonationOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/v1/donation-options')
      .then(({ data }) => {
        console.log('donation options:', data);
        setOptions(data.data || []);
      })
      .catch((err) => {
        console.log('error:', err);
        setOptions([]);
      })
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

  return (
    <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {options.map((option) => (
            <div
              key={option.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={option.image || 'https://placehold.co/600x600'}
                  alt={getTitle(option)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  ₹{option.amount}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {getTitle(option)}
                </h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2 opacity-90">
                  {getDescription(option)}
                </p>
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                  <DonateNow scrollToId="donation-form" />
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
