import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../common/button/ChangeLanguage';
import { useNavigate } from 'react-router-dom';
import { useDonateNavigate } from '@/hooks/useDonateNavigate';
import DonateNow from '../common/button/DonateNow';

function Navbar() {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();
  const navigate = useNavigate();
  return (
    <nav
      className="h-16 flex justify-between px-4 md:px-6 lg:px-8 items-center 
  border-b border-border bg-background sticky top-0 z-50"
    >
      <div
        onClick={() => navigate('/')}
        className="flex cursor-pointer items-center gap-2"
      >
        <img className="size-10" src="/logo/logo-192x192.png" />
        <h2 className="hidden md:block font-semibold text-md md:text-lg lg:text-xl">
          {t('footer.title')}
        </h2>
      </div>
      <div className="flex gap-3 items-center">
        <ChangeLanguage />
        <a
          href="https://wa.me/number"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-primary-lighter hover:bg-primary-light text-text-primary transition-colors duration-200"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 text-success" />
        </a>
        <DonateNow size="sm" onClick={navigateToDonate} />
      </div>
    </nav>
  );
}

export default Navbar;
