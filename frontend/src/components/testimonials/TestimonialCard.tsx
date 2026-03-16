import { Quote } from 'lucide-react';
import { StarRating } from './StarRating';

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  city: string;
  avatar: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div
    className="
      flex-shrink-0 w-[320px]
      bg-white border border-[#F0D5C0] rounded-2xl p-6
      shadow-[0_2px_12px_rgba(255,115,0,0.07)]
      hover:shadow-[0_8px_32px_rgba(255,115,0,0.18)]
      hover:border-[#FF7300]/40
      hover:-translate-y-1.5
      transition-all duration-300 cursor-default
    "
  >
    {/* Quote icon */}
    <Quote size={28} className="text-[#FF7300]/20 mb-3 fill-[#FF7300]/15" />

    {/* Quote text */}
    <p className="text-[#5C2C1C] text-sm leading-relaxed mb-5 line-clamp-4">
      {testimonial.quote}
    </p>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-[#F0D5C0] to-transparent mb-4" />

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-[#FF7300]/25"
          onError={(e) => {
            (e.target as HTMLImageElement).style.background = '#FFBF80';
          }}
        />
        {/* Online dot */}
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#2e9e4f] rounded-full border-2 border-white" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#2D0F00] text-sm truncate">
          {testimonial.name}
        </p>
        <p className="text-[#8A5C4B] text-xs truncate">
          {testimonial.title} · {testimonial.city}
        </p>
        <StarRating count={testimonial.rating} />
      </div>
    </div>
  </div>
);
