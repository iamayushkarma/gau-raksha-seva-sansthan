import { Plus } from 'lucide-react';

interface SevaCreateCardProps {
  onClick: () => void;
}

const SevaCreateCard: React.FC<SevaCreateCardProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-colors flex flex-col items-center justify-center gap-3 p-8 min-h-72 cursor-pointer w-full"
  >
    <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
      <Plus size={22} className="text-gray-400" />
    </div>
    <div className="text-center">
      <p className="text-base font-semibold text-gray-700">Create New Seva</p>
      <p className="text-sm text-gray-400 mt-1">
        Initiate a new rescue or welfare activity
      </p>
    </div>
  </button>
);

export default SevaCreateCard;
