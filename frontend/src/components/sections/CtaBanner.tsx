import { useTranslation } from 'react-i18next';
import { Heart, Gift } from 'lucide-react';

export default function CtaBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff8f2]">
      <div
        className="
          relative overflow-hidden
          max-w-6xl mx-auto
          bg-[#f15a24] rounded-3xl
          px-8 py-16 md:py-20
          text-center
        "
      >
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-[#E85D00]/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 bg-[#7A2E00]/30 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            {t('ctaBanner.title')}
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t('ctaBanner.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary — white */}
            <a
              href="#donation-form"
              className="
                inline-flex items-center gap-2
                bg-white text-[#FF7300] font-bold text-sm md:text-base
                px-8 py-4 rounded-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                hover:bg-[#fff3ea] hover:scale-[1.03]
                transition-all duration-200
                min-w-[200px] justify-center
              "
            >
              <Heart size={16} className="fill-[#FF7300] text-[#FF7300]" />
              {t('ctaBanner.btn_general')}
            </a>

            {/* Secondary — ghost */}
            <a
              href="#donation-form"
              className="
                inline-flex items-center gap-2
                bg-white/15 text-white font-bold text-sm md:text-base
                px-8 py-4 rounded-2xl
                border border-white/30
                hover:bg-white/25 hover:scale-[1.03]
                transition-all duration-200
                min-w-[200px] justify-center
                backdrop-blur-sm
              "
            >
              <Gift size={16} className="text-white" />
              {t('ctaBanner.btn_inkind')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
