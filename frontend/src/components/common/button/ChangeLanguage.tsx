import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

function ChangeLanguage() {
  const [changeLanguage, setChangeLanguage] = useState<string>('en');
  const [languageOptions, setLanguageOptions] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const toggleLanguageChangeModal = () => {
    setLanguageOptions((prev) => !prev);
  };
  const setLanguageEn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage('en');
    setChangeLanguage('en');
    setLanguageOptions(false);
  };

  const setLanguageHi = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage('hi');
    setChangeLanguage('hi');
    setLanguageOptions(false);
  };
  return (
    <div
      onClick={toggleLanguageChangeModal}
      className="px-2 relative flex items-center justify-center gap-2 py-1.5 bg-surface-light border border-border rounded-lg shadow cursor-pointer"
    >
      <Languages className="size-5" />
      <span>{i18n.language === 'en' ? 'English' : 'हिंदी'}</span>
      {languageOptions && (
        <div className="absolute w-20 top-10 z-50 flex flex-col items-center justify-center gap-1 p-1 bg-surface-light border border-border rounded-lg shadow ">
          <button
            className="cursor-pointer lg:text-text-secondary hover:text-text-primary transition-all duration-200"
            onClick={setLanguageEn}
          >
            English
          </button>
          <button
            className="cursor-pointer lg:text-text-secondary hover:text-text-primary transition-all duration-200"
            onClick={setLanguageHi}
          >
            हिन्दी
          </button>
        </div>
      )}
    </div>
  );
}

export default ChangeLanguage;
