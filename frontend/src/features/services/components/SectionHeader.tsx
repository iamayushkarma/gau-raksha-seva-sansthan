import type { SectionHeaderProps } from '@/shared/types/servicestypes';

export function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <>
      {/* Abstract Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl transform translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase mb-4">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
