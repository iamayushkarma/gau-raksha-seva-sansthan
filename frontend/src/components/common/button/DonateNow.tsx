type DonateNowProp = {
  className?: string;
  onClick?: () => void;
  scrollToId?: string;
};

function DonateNow({ className, onClick, scrollToId }: DonateNowProp) {
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
      Donate Now
    </button>
  );
}

export default DonateNow;
