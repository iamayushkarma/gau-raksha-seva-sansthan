import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Pencil, Trash2, Plus, Youtube } from 'lucide-react';

import { videoApi } from '@/config/video-api';
import { emptyVideoForm, getYouTubeThumbnail } from '@/types/video.types';

import type { Video, VideoFormData } from '@/types/video.types';

import VideoModal from '@/components/common/VideoModal';

const VideoManagement: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null);
  const [editTarget, setEditTarget] = useState<Video | null>(null);

  const [form, setForm] = useState<VideoFormData>(emptyVideoForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    setLoading(true);

    videoApi
      .getAll()
      .then(setVideos)
      .catch(() => toast.error('Failed to load videos'))
      .finally(() => setLoading(false));
  };

  const openCreate = () => {
    setForm(emptyVideoForm);
    setEditTarget(null);
    setModalMode('create');
  };

  const openEdit = (video: Video) => {
    setForm({
      title_en: video.title_en,
      title_hi: video.title_hi || '',
      description_en: video.description_en,
      description_hi: video.description_hi || '',
      youtube_url: video.youtube_url,
      thumbnail: video.thumbnail || '',
      order_index: video.order_index,
    });

    setEditTarget(video);
    setModalMode('edit');
  };

  const closeModal = () => {
    setModalMode(null);
    setEditTarget(null);
    setForm(emptyVideoForm);
  };

  const handleChange = (field: keyof VideoFormData, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (
      !form.title_en.trim() ||
      !form.youtube_url.trim() ||
      !form.description_en.trim()
    ) {
      toast.error('Title, YouTube URL and Description are required.');
      return;
    }

    setSaving(true);

    const currentMode = modalMode;
    const currentId = editTarget?.id;

    try {
      if (currentMode === 'create') {
        await videoApi.create(form);
      } else if (currentMode === 'edit' && currentId) {
        await videoApi.update(currentId, form);
      }

      closeModal();

      toast.success(
        currentMode === 'create' ? 'Video added!' : 'Video updated!'
      );

      fetchVideos();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (video: Video) => {
    if (!confirm(`Delete "${video.title_en}"?`)) return;

    const toastId = toast.loading('Deleting...');

    try {
      await videoApi.remove(video.id);

      setVideos((prev) => prev.filter((v) => v.id !== video.id));

      toast.success('Video deleted.', { id: toastId });
    } catch {
      toast.error('Failed to delete.', { id: toastId });
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-100 animate-pulse h-52"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 bg-background min-h-screen">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Video Management
          </h2>

          <p className="text-text-secondary text-sm mt-1">
            Manage and organize all videos displayed on the website, including
            rescue stories, gaushala activities, and awareness content.
          </p>
        </div>

        {/* Grid */}
        <section className="mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {videos.map((video) => {
                const thumb =
                  video.thumbnail || getYouTubeThumbnail(video.youtube_url);

                return (
                  <div
                    key={video.id}
                    className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col"
                  >
                    {/* Action bar */}
                    <div className="flex items-center justify-end gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50">
                      <button
                        onClick={() => openEdit(video)}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <Pencil size={13} /> Edit
                      </button>

                      <button
                        onClick={() => handleDelete(video)}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                      <img
                        src={thumb}
                        alt={video.title_en}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Youtube
                          size={32}
                          className="text-red-500 drop-shadow-lg"
                        />
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                        #{video.order_index}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-4 gap-1">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {video.title_en}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-2 flex-1">
                        {video.description_en}
                      </p>

                      <a
                        href={video.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline truncate"
                      >
                        {video.youtube_url}
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Create Card */}
              <button
                onClick={openCreate}
                className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-colors flex flex-col items-center justify-center gap-3 p-8 min-h-52 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  <Plus size={22} className="text-gray-400" />
                </div>

                <div className="text-center">
                  <p className="text-base font-semibold text-gray-700">
                    Add New Video
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Add a YouTube video to the carousel
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>

      {modalMode && (
        <VideoModal
          mode={modalMode}
          form={form}
          saving={saving}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default VideoManagement;
