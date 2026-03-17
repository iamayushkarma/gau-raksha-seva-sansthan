import { useTranslation } from 'react-i18next';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';
import type { DonateNowProp } from '@/shared/types/ui.types';

function DonateNow({
  className,
  onClick,
  scrollToId,
  shimmer = false,
  size,
}: DonateNowProp) {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();

  function handleClick() {
    onClick?.();

    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      navigateToDonate();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${className} ${size === 'sm' ? 'donate-btn-sm' : 'donate-btn'}`}
      >
        <span className={shimmer ? 'donate-text-shimmer' : 'donate-text-plain'}>
          {t('buttons.donate_now')}
        </span>
      </button>

      <style>{`
          .donate-btn-sm {
          position: relative;
          padding: 0.5rem 1rem;
          border-radius: 0.6rem;
          background-color: var(--color-text-primary);
          border: 1px solid var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 0.8rem;
        }
        .donate-btn-sm:hover {
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(255, 222, 77, 0.35);
          transform: translateY(-1px);
        }
        .donate-btn-sm:active {
          transform: scale(0.98) translateY(0);
        }
        .donate-btn-sm:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        .donate-btn {
          position: relative;
          padding: 0.6rem 1.3rem;
          border-radius: 0.75rem;
          background-color: var(--color-text-primary);
          border: 1px solid var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
        }
        .donate-btn:hover {
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(255, 222, 77, 0.35);
          transform: translateY(-1px);
        }
        .donate-btn:active {
          transform: scale(0.98) translateY(0);
        }
        .donate-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }

        /* plain — no shimmer */
        .donate-text-plain {
          display: inline-block;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }

        /* shimmer */
        .donate-text-shimmer {
          display: inline-block;
          line-height: 1.2;
          background-image: linear-gradient(
            90deg,
            var(--color-primary-dark) 0%,
            var(--color-primary-dark) 30%,
            var(--color-primary-light) 45%,
            #ffffff 50%,
            var(--color-primary-light) 55%,
            var(--color-primary-dark) 70%,
            var(--color-primary-dark) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerTextLTR 3.5s linear infinite;
        }

        @keyframes shimmerTextLTR {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (max-width: 640px) {
          .donate-btn { padding: 0.65rem 1.4rem; }
          .donate-text-shimmer { animation-duration: 4.5s; }
        }

        @media (prefers-reduced-motion: reduce) {
          .donate-text-shimmer {
            animation: none;
            -webkit-text-fill-color: var(--color-primary);
          }
        }
      `}</style>
    </>
  );
}

export default DonateNow;
