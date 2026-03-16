import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Service } from '@/types/servicestypes';

interface DesktopServiceCarouselProps {
  services: Service[];
}

export function DesktopServiceAccordion({
  services,
}: DesktopServiceCarouselProps) {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const total = services.length;
  const maxIndex = total - visibleCount;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // each card = (100% - gaps) / 3  — we use percentage-based translation
  const cardWidthPercent = 100 / visibleCount;
  const gapPx = 24; // gap-6 = 24px

  return (
    <div className="hidden md:block">
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-surface shadow-md flex items-center justify-center text-text-tertiary hover:text-primary hover:border-primary hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Viewport — clips the sliding track */}
        <div className="overflow-hidden mx-6">
          {/* Sliding track — all cards in one row, slides via translateX */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gapPx}px`,
              transform: `translateX(calc(-${index * cardWidthPercent}% - ${index * gapPx}px))`,
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="group shrink-0 rounded-2xl overflow-hidden border border-border bg-surface shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{
                  width: `calc(${cardWidthPercent}% - ${(gapPx * (visibleCount - 1)) / visibleCount}px)`,
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-2">
                  <h3 className="font-bold text-text-primary text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-surface shadow-md flex items-center justify-center text-text-tertiary hover:text-primary hover:border-primary hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      {total > visibleCount && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
