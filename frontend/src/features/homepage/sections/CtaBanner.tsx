import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import Button from '@/shared/components/ui/Button';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';

export default function CtaBanner() {
  const { t } = useTranslation();
  const navigate = useDonateNavigate();

  return (
    <section className="pb-12 px-4 md:px-8 lg:px-16 bg-background">
      <div className="relative overflow-hidden max-w-6xl mx-auto bg-primary rounded-3xl px-8 py-14 md:py-16 text-center">
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
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight mb-4">
            {t('ctaBanner.title')}
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {t('ctaBanner.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={navigate} className="bg-white text-primary">
              <Heart size={16} className="fill-primary text-primary" />
              {t('ctaBanner.btn_general')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
