import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DonateNow from '../common/button/DonateNow';
import { useDonateNavigate } from '@/hooks/useDonateNavigate';

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateToDonate = useDonateNavigate();

  type QuickLink = {
    title: string;
    href: string;
  };
  // translated quick links
  const quickLinks = t('footer.quick_links', {
    returnObjects: true,
  }) as QuickLink[];
  return (
    <footer className="bg-surface-light border-t border-t-border">
      {/* MAIN FOOTER GRID */}
      <section className="p-8 lg:p-16 mx-auto grid grid-cols-1 max-sm:gap-10 lg:grid-cols-3 lg:justify-items-center">
        {/* Heading and sub heading section */}
        <div className="lg:p-2 col-span-1 flex flex-col">
          <div className="flex items-center gap-3">
            <img className="size-12" src="/logo/logo-192x192.png" />
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
              {t('footer.title')}
            </h2>
          </div>

          <p className="mt-6 md:mt-7 lg:mt-8 text-text-secondary">
            {t('footer.description')}
          </p>
          <DonateNow onClick={navigateToDonate} className="mt-4 max-w-40" />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col col-span-1">
          <h3 className="font-semibold text-[1.1rem]">
            {t('footer.quick_links_title')}
          </h3>

          <ul className="mt-5">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => navigate(link.href)}
                className="py-1 cursor-pointer text-text-secondary hover:text-text-primary font-medium transition-all duration-100"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col col-span-1">
          <h3 className="font-semibold text-[1.1rem]">
            {t('footer.contact_title')}
          </h3>

          <div className="mt-5 space-y-3 text-text-secondary">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>support@gauraksha.org</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Khargone, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR (BOTTOM SECTION) */}
      <div className="border-t border-border px-8 lg:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary gap-3">
        <p>
          © {new Date().getFullYear()} {t('footer.title')}.{' '}
          {t('footer.copyright')}
        </p>

        <div className="flex gap-6">
          <span
            onClick={() => navigate('/privacy-policy')}
            className="cursor-pointer hover:text-text-primary"
          >
            {t('footer.privacy')}
          </span>

          <span
            onClick={() => navigate('/terms-of-service')}
            className="cursor-pointer hover:text-text-primary"
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
