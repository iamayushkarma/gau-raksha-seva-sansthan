import { useRef } from 'react';
import {
  TestimonialCard,
  type TestimonialItem,
} from '@/features/testimonials/components/TestimonialCard';

interface MarqueeRowProps {
  items: TestimonialItem[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const MarqueeRow = ({
  items,
  direction = 'left',
  speed = 40,
}: MarqueeRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...items, ...items];

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

  return (
    <div className="overflow-hidden w-full relative py-2">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-linear-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-linear-to-l from-background to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-5 w-max"
        style={{ animation: `marquee-${direction} ${speed}s linear infinite` }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} testimonial={item} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
