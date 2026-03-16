import { Star } from 'lucide-react';

interface StarRatingProps {
  count?: number;
}

export const StarRating = ({ count = 5 }: StarRatingProps) => (
  <div className="flex gap-0.5 mt-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="text-[#FF7300] fill-[#FF7300]" />
    ))}
  </div>
);
