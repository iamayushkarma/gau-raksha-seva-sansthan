import { useTranslation } from 'react-i18next';

function QuoteBlock() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-surface-light p-6 rounded-xl border border-primary/20 flex gap-4 items-center">
      <div className="h-16 w-16 shrink-0 rounded-full overflow-hidden border-2 border-surface shadow-md">
        <img
          alt="Close up of a calm cow face"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjtryL7dBJmOD8EeW5cMfDnxnA4HvAEUyP-jVcTro0nfjMMqfxoHEuAYhgs7jj_MQys_1dQuO0ySVYoXh5qpj7gc00REGDDZkw6YhwQizbsCGP0zOn6P6wNW5YuZf6teoHjU5TTqkALESHUqs5jOECdwLxamXA1ozO-jKtteBytQktqSIfp2qjufaSJ8hNjPbEaMrKx8EMG6eJJUpV7d_DdQmwOdZTnDEqg11Zwrp4vsJvXqsOzA-ujbCSAnBjUc-kvLbwiYyV6dQ"
        />
      </div>
      <div>
        <p className="text-sm italic text-text-secondary">{t('about.quote')}</p>
        <span className="block mt-1 text-xs font-bold text-primary">
          - {t('about.mahathma')}
        </span>
      </div>
    </div>
  );
}

export default QuoteBlock;
