import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import { MarqueeRow } from '@/features/testimonials/components/MarqueeRow';
import type { TestimonialItem } from '@/features/testimonials/components/TestimonialCard';
import Button from '@/shared/components/ui/Button';
import { useDonateNavigate } from '@/shared/hooks/useDonateNavigate';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const navigate = useDonateNavigate();

  const testimonials = t('testimonials.list', {
    returnObjects: true,
  }) as TestimonialItem[];

  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="py-20 bg-background overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest
          text-[#FF7300] bg-[#FF7300]/10 border border-[#FF7300]/20
          px-4 py-1.5 rounded-full mb-4"
        >
          {t('testimonials.badge')}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#2D0F00] leading-tight">
          {t('testimonials.title')}{' '}
          <span className="text-[#FF7300]">
            {t('testimonials.title_highlight')}
          </span>
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF7300]/40" />
          <span className="text-lg">🙏</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF7300]/40" />
        </div>

        <p className="text-[#5C2C1C] max-w-lg mx-auto text-sm leading-relaxed">
          {t('testimonials.description')}
        </p>
      </div>

      {/* Scroll Left */}
      <div className="mb-4">
        <MarqueeRow items={row1} direction="left" speed={35} />
      </div>

      {/* Scroll Right */}
      <MarqueeRow items={row2} direction="right" speed={42} />

      {/* CTA Button */}
      <div className="text-center mt-14">
        <p className="text-[#8A5C4B] text-sm mb-4">
          {t('testimonials.cta_sub')}
        </p>
        <Button className="text-white" onClick={navigate}>
          <Heart size={16} className="fill-white" />
          {t('testimonials.cta')}
        </Button>
      </div>
    </section>
  );
}
