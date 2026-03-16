import { useEffect, useLayoutEffect, useState } from 'react';
import { Play, Search, X, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { videoApi } from '@/core/config/video-api';
import {
  getYouTubeThumbnail,
  getYouTubeEmbed,
} from '@/shared/types/video.types';
import type { Video } from '@/shared/types/video.types';

const Videos = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [playingId, setPlayingId] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    videoApi
      .getAll()
      .then(setVideos)
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, []);

  const getTitle = (v: Video) =>
    i18n.language === 'hi' ? v.title_hi || v.title_en : v.title_en;

  const getDescription = (v: Video) =>
    i18n.language === 'hi'
      ? v.description_hi || v.description_en
      : v.description_en;

  const filtered = videos.filter(
    (v) =>
      getTitle(v).toLowerCase().includes(search.toLowerCase()) ||
      getDescription(v).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background py-12 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-semibold text-sm transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            {i18n.language === 'hi' ? 'वापस जाएं' : 'Back'}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {i18n.language === 'hi' ? 'हमारे वीडियो' : 'Our Videos'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-2">
            {i18n.language === 'hi' ? 'वीडियो गैलरी' : 'Video Gallery'}
          </h1>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            {i18n.language === 'hi'
              ? 'गौशाला में हमारे कार्य और गायों की देखभाल के वीडियो देखें।'
              : 'Watch our rescue operations, cow care stories, and life at the gaushala.'}
          </p>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-video rounded-xl bg-gray-100 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-gray-100 rounded animate-pulse w-full" />
                <div className="h-3 bg-gray-100 rounded animate-pulse w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* No results */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-text-secondary">
            <p className="text-lg">
              {i18n.language === 'hi'
                ? 'कोई वीडियो नहीं मिला।'
                : 'No videos found.'}
            </p>
          </div>
        )}

        {/* Video grid */}
        {!loading && filtered.length > 0 && (
          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((video) => {
              const thumb =
                video.thumbnail || getYouTubeThumbnail(video.youtube_url);
              const embedUrl = getYouTubeEmbed(video.youtube_url);
              const isPlaying = playingId === video.id;
              return (
                <div key={video.id} className="flex flex-col gap-3 group">
                  {/* Thumbnail / Player */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-md">
                    {isPlaying ? (
                      <iframe
                        src={embedUrl}
                        title={getTitle(video)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setPlayingId(video.id)}
                      >
                        <img
                          src={thumb}
                          alt={getTitle(video)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/85 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                            <Play
                              size={22}
                              className="text-gray-900 ml-1"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="font-bold text-text-primary text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {getTitle(video)}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed line-clamp-2">
                      {getDescription(video)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Videos;
