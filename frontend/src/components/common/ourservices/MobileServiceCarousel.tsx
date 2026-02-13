import { useRef, useEffect, useState } from 'react';
import type { Service } from '@/types/servicestypes';
import { ServiceCard } from './ServiceCard';

interface MobileServiceCarouselProps {
  services: Service[];
}

export function MobileServiceCarousel({
  services,
}: MobileServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const userInteractionTimeoutRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isSnappingRef = useRef(false);

  const infiniteServices = [
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const getCardWidth = () => {
      const firstCard = scrollContainer.firstElementChild as HTMLElement;
      return firstCard ? firstCard.offsetWidth + 16 : 0;
    };

    setTimeout(() => {
      const cardWidth = getCardWidth();
      scrollContainer.scrollLeft = cardWidth * services.length * 2;
    }, 100);

    let lastTime = performance.now();
    const scrollSpeed = 30;

    const autoScroll = (currentTime: number) => {
      if (isUserInteracting || isSnappingRef.current) {
        lastTime = currentTime;
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      scrollContainer.scrollLeft += scrollSpeed * deltaTime;

      const cardWidth = getCardWidth();
      const sectionWidth = cardWidth * services.length;
      const currentScroll = scrollContainer.scrollLeft;

      if (currentScroll >= sectionWidth * 4) {
        scrollContainer.scrollLeft = sectionWidth * 2;
      } else if (currentScroll <= sectionWidth * 0.5) {
        scrollContainer.scrollLeft = sectionWidth * 2.5;
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isUserInteracting, services.length]);

  const handleUserInteraction = () => {
    setIsUserInteracting(true);

    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    userInteractionTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 2500);
  };

  const handleTouchEnd = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isSnappingRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const firstCard = scrollContainer.firstElementChild as HTMLElement;
      if (!firstCard) return;

      isSnappingRef.current = true;

      const cardWidth = firstCard.offsetWidth + 16;
      const currentScroll = scrollContainer.scrollLeft;

      const exactCardPosition = currentScroll / cardWidth;
      const currentCardIndex = Math.floor(exactCardPosition);
      const progressInCard = exactCardPosition - currentCardIndex;

      let targetScroll;

      if (progressInCard >= 0.6) {
        targetScroll = (currentCardIndex + 1) * cardWidth;
      } else if (progressInCard <= 0.4) {
        targetScroll = currentCardIndex * cardWidth;
      } else {
        targetScroll =
          progressInCard >= 0.5
            ? (currentCardIndex + 1) * cardWidth
            : currentCardIndex * cardWidth;
      }

      scrollContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isSnappingRef.current = false;
      }, 400);
    }, 100);
  };

  return (
    <div
      ref={scrollRef}
      onTouchStart={handleUserInteraction}
      onTouchEnd={handleTouchEnd}
      className="md:hidden flex gap-4 overflow-x-auto h-100 scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        scrollSnapType: 'none',
      }}
    >
      {infiniteServices.map((service, index) => (
        <ServiceCard key={`mobile-${index}`} service={service} index={index} />
      ))}
    </div>
  );
}
