import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '@/types/servicestypes';

interface DesktopServiceAccordionProps {
  services: Service[];
}

export function DesktopServiceAccordion({
  services,
}: DesktopServiceAccordionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex gap-4 h-125 group">
      {services.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;

        return (
          <motion.div
            key={`desktop-${index}`}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            layout
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`
              relative rounded-2xl overflow-hidden cursor-pointer
              transition-all duration-500
              ${isHovered ? 'flex-4' : isAnyHovered ? 'flex-[0.5]' : 'flex-1'}
            `}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="absolute w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isHovered
                  ? 'bg-linear-to-t from-black/90 via-black/40 to-transparent'
                  : 'bg-black/30'
              }`}
            />

            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="text-2xl font-bold text-white tracking-widest uppercase"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            )}

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-text-on-primary text-2xl">🐄</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg text-neutral-200 leading-relaxed max-w-prose">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
