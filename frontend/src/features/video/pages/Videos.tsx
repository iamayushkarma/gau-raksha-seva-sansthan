import { useEffect, useLayoutEffect, useState } from 'react';
import { Play, ArrowLeft, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { videoApi } from '@/core/config/video-api';
import {
  getYouTubeThumbnail,
  getYouTubeEmbed,
} from '@/shared/types/video.types';
import type { Video } from '@/shared/types/video.types';
import Button from '@/shared/components/ui/Button';
import { youtubeChannelLink } from '@/core/data/constants';

const Videos = () => {
  const { t } = useTranslation();
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

  const getTitle = (v: Video) => v.title_hi || v.title_en;
  const getDescription = (v: Video) => v.description_hi || v.description_en;

  const filtered = videos.filter(
    (v) =>
      getTitle(v).toLowerCase().includes(search.toLowerCase()) ||
      getDescription(v).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Back Button */}
      <div className="px-4 md:px-20 pt-6 absolute z-40 max-sm:top-12 bg-b">
        <Button
          onClick={() => navigate(-1)}
          icon={
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          }
          className="max-sm:px-3! max-sm:py-1.5! inline-flex flex-row-reverse items-center gap-2 text-text-secondary hover:text-text-primary font-semibold text-sm transition-colors bg-white group"
        >
          {t('privacyPolicy.back')}
        </Button>
      </div>
      <main className="min-h-screen bg-linear-to-b from-primary-lighter/60 to-background py-12 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t('videos.badge')}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-2">
              {t('videos.title')}
            </h1>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              {t('videos.description')}
            </p>

            {/* YouTube Channel Button */}
            <a
              href={youtubeChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Youtube size={18} className="shrink-0" />
              {t('videos.youtubeBtn')}
            </a>
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
              <p className="text-lg">{t('videos.noResults')}</p>
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
    </>
  );
};

export default Videos;
