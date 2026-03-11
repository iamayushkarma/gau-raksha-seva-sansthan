import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { VideoFormData } from '@/types/video.types.ts';
import { getYouTubeThumbnail, getYouTubeId } from '@/types/video.types.ts';
interface VideoModalProps {
  mode: 'create' | 'edit';
  form: VideoFormData;
  saving: boolean;
  onChange: (field: keyof VideoFormData, value: string | number) => void;
  onSubmit: () => void;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  mode,
  form,
  saving,
  onChange,
  onSubmit,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const autoThumb = getYouTubeThumbnail(form.youtube_url);
  const isValidYt = !!getYouTubeId(form.youtube_url);

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            {mode === 'create' ? 'Add New Video' : 'Edit Video'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {/* YouTube URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              YouTube URL *
            </label>
            <input
              value={form.youtube_url}
              onChange={(e) => onChange('youtube_url', e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {form.youtube_url && !isValidYt && (
              <p className="text-xs text-red-500">Invalid YouTube URL</p>
            )}
          </div>

          {/* Auto thumbnail preview */}
          {isValidYt && (
            <div className="rounded-lg overflow-hidden border border-gray-200 aspect-video">
              <img
                src={form.thumbnail || autoThumb}
                alt="Thumbnail preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Custom thumbnail URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Custom Thumbnail URL{' '}
              <span className="normal-case text-gray-400">
                (optional - auto-generated if empty)
              </span>
            </label>
            <input
              value={form.thumbnail}
              onChange={(e) => onChange('thumbnail', e.target.value)}
              placeholder="https://example.com/thumb.jpg"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Titles */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Title (English) *
              </label>
              <input
                value={form.title_en}
                onChange={(e) => onChange('title_en', e.target.value)}
                placeholder="e.g. Cow Rescue Story"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Title (Hindi)
              </label>
              <input
                value={form.title_hi}
                onChange={(e) => onChange('title_hi', e.target.value)}
                placeholder="e.g. गौ रक्षा कहानी"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Descriptions */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Description (English) *
            </label>
            <textarea
              value={form.description_en}
              onChange={(e) => onChange('description_en', e.target.value)}
              rows={3}
              placeholder="Describe this video..."
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Description (Hindi)
            </label>
            <textarea
              value={form.description_hi}
              onChange={(e) => onChange('description_hi', e.target.value)}
              rows={3}
              placeholder="हिंदी में विवरण..."
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Order */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Display Order
            </label>
            <input
              type="number"
              value={form.order_index}
              onChange={(e) => onChange('order_index', Number(e.target.value))}
              placeholder="0"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={saving}
            className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving
              ? 'Saving...'
              : mode === 'create'
                ? 'Add Video'
                : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
