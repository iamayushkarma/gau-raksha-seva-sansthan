import { Pencil, Trash2 } from 'lucide-react';
import type { DonationOption } from '@/types/ui.type';

interface SevaCardProps {
  option: DonationOption;
  onEdit: (option: DonationOption) => void;
  onDelete: (option: DonationOption) => void;
}

const SevaCard: React.FC<SevaCardProps> = ({ option, onEdit, onDelete }) => {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Action bar */}
      <div className="flex items-center justify-end gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50">
        <button
          onClick={() => onEdit(option)}
          className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <Pencil size={13} />
          Edit
        </button>
        <button
          onClick={() => onDelete(option)}
          className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <Trash2 size={13} />
          Delete
        </button>
      </div>

      {/* Image */}
      <div className="h-44 w-full overflow-hidden bg-gray-100 shrink-0">
        <img
          src={option.image || 'https://placehold.co/600x400'}
          alt={option.title_en}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {option.title_en}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">
          {option.description_en}
        </p>
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Donation Amount
          </span>
          <span className="text-base font-bold text-gray-900">
            ₹{Number(option.amount).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SevaCard;
