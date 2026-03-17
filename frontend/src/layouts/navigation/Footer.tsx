import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DonateNow from '../../shared/components/button/DonateNow';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateToDonate = useDonateNavigate();

  type QuickLink = { title: string; href: string };
  const quickLinks = t('footer.quick_links', {
    returnObjects: true,
  }) as QuickLink[];

  return (
    <footer className="bg-footer border-t border-t-border">
      {/* Main grid */}
      <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3 lg:justify-items-center max-w-7xl">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img
              className="size-10 md:size-12"
              src="/logo/logo-192x192.png"
              alt="Logo"
            />
            <h2 className="font-semibold text-white text-lg md:text-xl">
              {t('footer.title')}
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            {t('footer.description')}
          </p>
          <DonateNow
            shimmer
            size="sm"
            onClick={navigateToDonate}
            className="max-w-40"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col select-none">
          <h3 className="font-semibold text-white text-base md:text-lg mb-4">
            {t('footer.quick_links_title')}
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => navigate(link.href)}
                className="text-sm md:text-base cursor-pointer text-gray-400 hover:text-gray-100 font-medium transition-colors duration-150"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col select-none">
          <h3 className="font-semibold text-white text-base md:text-lg mb-4">
            {t('footer.contact_title')}
          </h3>
          <div className="flex flex-col gap-3 text-sm md:text-base text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>support@gauraksha.org</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>Khargone, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 sm:px-10 lg:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} {t('footer.title')}.{' '}
          {t('footer.copyright')}
        </p>
        <div className="flex gap-5">
          <span
            onClick={() => navigate('/privacy-policy')}
            className="cursor-pointer hover:text-white transition-colors"
          >
            {t('footer.privacy')}
          </span>
          <span
            onClick={() => navigate('/terms-of-service')}
            className="cursor-pointer hover:text-white transition-colors"
          >
            {t('footer.terms')}
          </span>
        </div>
        <p>{t('footer.designed')}</p>
      </div>
    </footer>
  );
}

export default Footer;
