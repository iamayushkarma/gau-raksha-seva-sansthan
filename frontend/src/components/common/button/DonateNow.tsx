import { useTranslation } from 'react-i18next';
type DonateNowProp = {
  className?: string;
  onClick?: () => void;
  scrollToId?: string;
};

function DonateNow({ className, onClick, scrollToId }: DonateNowProp) {
  const { t } = useTranslation();
  function handleClick() {
    onClick?.();
    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} w-full text-center
      bg-text-primary text-primary-dark
      font-semibold py-3 rounded-lg
      hover:bg-text-secondary
      active:scale-[0.98]
      transition-all duration-300`}
    >
      {t('buttons.donate_now')}
    </button>
  );
}

export default DonateNow;
