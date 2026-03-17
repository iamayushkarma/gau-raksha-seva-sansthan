import type { SectionHeaderProps } from '@/shared/types/servicestypes';

export function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <>
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          {/* Badge */}
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary-dark text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            {badge}
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-tight tracking-tight mb-4">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
