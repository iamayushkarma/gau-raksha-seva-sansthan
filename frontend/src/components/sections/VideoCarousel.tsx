import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { videoApi } from '@/config/video-api';
import { getYouTubeThumbnail, getYouTubeEmbed } from '@/types/video.types';
import type { Video } from '@/types/video.types';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const VideoCarousel = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    videoApi
      .getAll()
      .then((data) => setVideos(data.slice(0, 5)))
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = Math.min(
    windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3,
    videos.length
  );

  // ── smooth-slide geometry (mirrors DesktopServiceAccordion) ──
  const gapPx = 24; // gap-6
  const cardWidthPercent = 100 / visibleCount;
  const maxIndex = Math.max(0, videos.length - visibleCount);

  const getTitle = (v: Video) =>
    i18n.language === 'hi' ? v.title_hi || v.title_en : v.title_en;

  const getDescription = (v: Video) =>
    i18n.language === 'hi'
      ? v.description_hi || v.description_en
      : v.description_en;

  const prev = () => {
    setPlayingId(null);
    setStartIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setPlayingId(null);
    setStartIndex((i) => Math.min(maxIndex, i + 1));
  };

  const canPrev = startIndex > 0;
  const canNext = startIndex < maxIndex;

  if (loading) {
    return (
      <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-100 animate-pulse aspect-video"
            />
          ))}
        </div>
      </section>
    );
  }

  if (videos.length === 0) return null;

  return (
    <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4 bg-primary-lighter/40">
      {/* heading */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t('videos.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
          {t('videos.title')}
        </h2>
        <p className="text-text-secondary mt-3 max-w-xl mx-auto">
          {t('videos.description')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <Button className="gap-3" onClick={() => navigate('/videos')}>
            {t('videos.view_all') || 'View All'} →
          </Button>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-primary hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* ── Clipped viewport ── */}
          <div className="overflow-hidden mx-6">
            {/* ── Sliding track: all cards in one flex row ── */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${gapPx}px`,
                transform: `translateX(calc(-${startIndex * cardWidthPercent}% - ${startIndex * gapPx}px))`,
              }}
            >
              {videos.map((video) => {
                const thumb =
                  video.thumbnail || getYouTubeThumbnail(video.youtube_url);
                const embedUrl = getYouTubeEmbed(video.youtube_url);
                const isPlaying = playingId === video.id;

                return (
                  <div
                    key={video.id}
                    className="flex-shrink-0 flex flex-col gap-3"
                    style={{
                      width: `calc(${cardWidthPercent}% - ${(gapPx * (visibleCount - 1)) / visibleCount}px)`,
                    }}
                  >
                    {/* video player or thumbnail */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
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
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => setPlayingId(video.id)}
                        >
                          <img
                            src={thumb}
                            alt={getTitle(video)}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/80 group-hover:bg-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                              <Play
                                size={18}
                                className="text-gray-900 ml-0.5"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* title + description */}
                    <div>
                      <h3 className="font-bold text-text-primary text-sm uppercase tracking-wide leading-snug">
                        {getTitle(video)}
                      </h3>
                      <p className="text-text-secondary text-sm italic mt-1 line-clamp-3 leading-relaxed">
                        {getDescription(video)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-primary hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        {videos.length > visibleCount && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setStartIndex(i);
                  setPlayingId(null);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === startIndex
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;
