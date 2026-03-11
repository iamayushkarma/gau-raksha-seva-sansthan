import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { FormData } from '@/types/ui.type';

interface SevaModalProps {
  mode: 'create' | 'edit';
  form: FormData;
  saving: boolean;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

const SevaModal: React.FC<SevaModalProps> = ({
  mode,
  form,
  saving,
  onChange,
  onSubmit,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            {mode === 'create' ? 'Create New Seva' : 'Edit Seva'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Title (English) *
              </label>
              <input
                value={form.title_en}
                onChange={(e) => onChange('title_en', e.target.value)}
                placeholder="e.g. Cow Rescue"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Title (Hindi)
              </label>
              <input
                value={form.title_hi}
                onChange={(e) => onChange('title_hi', e.target.value)}
                placeholder="e.g. गौ रक्षा"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Description (English) *
            </label>
            <textarea
              value={form.description_en}
              onChange={(e) => onChange('description_en', e.target.value)}
              placeholder="Describe this seva in English..."
              rows={3}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Description (Hindi)
            </label>
            <textarea
              value={form.description_hi}
              onChange={(e) => onChange('description_hi', e.target.value)}
              placeholder="हिंदी में विवरण..."
              rows={3}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Amount (₹) *
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => onChange('amount', e.target.value)}
              placeholder="e.g. 1100"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Image URL
            </label>
            <input
              value={form.image}
              onChange={(e) => onChange('image', e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="mt-2 h-32 w-full object-cover object-center rounded-lg border border-gray-200"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={saving}
            className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {saving
              ? 'Saving...'
              : mode === 'create'
                ? 'Create'
                : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SevaModal;
