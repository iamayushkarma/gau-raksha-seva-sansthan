import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Service } from '@/types/servicestypes';

interface MobileServiceCarouselProps {
  services: Service[];
}

export function MobileServiceCarousel({
  services,
}: MobileServiceCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = services.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const next = () => {
    const newIndex = Math.min(total - 1, index + 1);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[i] as HTMLElement;
    if (card) {
      container.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' });
    }
  };

  // sync dot index while user swipes
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth + 16;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setIndex(Math.min(Math.max(newIndex, 0), total - 1));
  };

  return (
    <div className="md:hidden">
      {/* Arrows above */}
      <div className="flex justify-end gap-2 mb-3 px-1">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-8 h-8 rounded-full border border-border bg-surface shadow-sm flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          disabled={index === total - 1}
          className="w-8 h-8 rounded-full border border-border bg-surface shadow-sm flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="group shrink-0 w-[85vw] snap-center rounded-2xl overflow-hidden border border-border bg-surface shadow-md flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-2">
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

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              scrollToIndex(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'w-6 h-2 bg-primary'
                : 'w-2 h-2 bg-border hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
