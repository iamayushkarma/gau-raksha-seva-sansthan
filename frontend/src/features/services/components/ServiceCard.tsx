import type { Service } from '@/shared/types/servicestypes';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      key={`mobile-${index}`}
      className="relative rounded-2xl overflow-hidden shrink-0 w-[85%]"
    >
      <img
        src={service.img}
        alt={service.title}
        className="absolute w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-sm text-neutral-200 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}
