import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';
import { useTranslation } from 'react-i18next';
function DonateNowShimmer() {
  const { t } = useTranslation();
  const navigateToDonate = useDonateNavigate();
  return (
    <>
      <button onClick={navigateToDonate} className="donate-btn mt-2">
        <span className="donate-text"> {t('buttons.donate_now')}</span>
      </button>

      <style>{`
        .donate-btn {
          position: relative;
          padding: 0.7rem 1.6rem;
          border-radius: 0.75rem;
          background-color: var(--color-text-primary);
          border: 1px solid var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .donate-text {
          display: inline-block;
          font-weight: 600;
          line-height: 1.2;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
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
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .donate-btn:hover {
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(255, 222, 77, 0.35);
          transform: translateY(-1px);
        }
        .donate-btn:active {
          transform: translateY(0);
        }
        @media (max-width: 640px) {
          .donate-btn {
            padding: 0.65rem 1.4rem;
          }
          .donate-text {
            animation-duration: 4.5s;
          }
        }
        .donate-btn:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .donate-text {
            animation: none;
            -webkit-text-fill-color: var(--color-primary);
          }
        }
      `}</style>
    </>
  );
}

export default DonateNowShimmer;
