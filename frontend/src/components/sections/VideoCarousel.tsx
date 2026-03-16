import { useEffect, useState, useRef } from 'react';
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

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

  const isMobile = windowWidth < 640;
  const visibleCount = Math.min(windowWidth < 1024 ? 2 : 3, videos.length);
  const gapPx = 24;
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

  const scrollToMobileIndex = (i: number) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const card = container.children[i] as HTMLElement;
    if (card)
      container.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' });
  };

  const mobilePrev = () => {
    const newIndex = Math.max(0, mobileIndex - 1);
    setMobileIndex(newIndex);
    scrollToMobileIndex(newIndex);
    setPlayingId(null);
  };

  const mobileNext = () => {
    const newIndex = Math.min(videos.length - 1, mobileIndex + 1);
    setMobileIndex(newIndex);
    scrollToMobileIndex(newIndex);
    setPlayingId(null);
  };

  const handleMobileScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth + 16;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setMobileIndex(Math.min(Math.max(newIndex, 0), videos.length - 1));
  };

  // ── Loading skeleton — dark bg version ──────────────────────────────────
  if (loading) {
    return (
      <section
        className="py-16 lg:px-16 md:px-12 sm:px-8 px-4
        bg-gradient-to-br from-text-primary via-primary-darker to-primary-dark"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg bg-white/10 animate-pulse aspect-video"
            />
          ))}
        </div>
      </section>
    );
  }

  if (videos.length === 0) return null;

  // ── Video card ────────────────────────────────────────────────────────────
  const VideoCard = ({ video }: { video: Video }) => {
    const thumb = video.thumbnail || getYouTubeThumbnail(video.youtube_url);
    const embedUrl = getYouTubeEmbed(video.youtube_url);
    const isPlaying = playingId === video.id;

    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
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
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Play button — white circle, deep-brown icon */}
              <div className="w-12 h-12 rounded-full bg-white/80 group-hover:bg-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                <Play
                  size={18}
                  className="text-text-primary ml-0.5"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── Arrow button — dark bg variant ───────────────────────────────────────
  const arrowBase =
    'rounded-full border bg-white/10 border-white/20 text-white/70 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-white/20 hover:border-primary hover:text-primary-light disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <section
      className="overflow-hidden py-16 lg:px-16 md:px-12 sm:px-8 px-4 relative
      bg-gradient-to-br from-text-primary via-primary-darker to-primary-dark"
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      {/* ── Section heading ── */}
      <div className="text-center mb-10 relative z-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary-light">
          {t('videos.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          {t('videos.title')}
        </h2>
        <p className="text-primary-lighter/80 mt-3 max-w-xl mx-auto">
          {t('videos.description')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Mobile ── */}
        {isMobile && (
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <Button
                onClick={() => navigate('/videos')}
                className="border-primary-light text-primary-light hover:bg-primary-light/10"
              >
                {t('videos.view_all') || 'View All'} →
              </Button>
              <div className="flex gap-2">
                <button
                  onClick={mobilePrev}
                  disabled={mobileIndex === 0}
                  className={`w-8 h-8 ${arrowBase}`}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={mobileNext}
                  disabled={mobileIndex === videos.length - 1}
                  className={`w-8 h-8 ${arrowBase}`}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* scrollable track */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="shrink-0 w-[85vw] snap-center flex flex-col gap-3"
                >
                  <VideoCard video={video} />
                  <div>
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide leading-snug">
                      {getTitle(video)}
                    </h3>
                    <p className="text-primary-lighter/80 text-sm italic mt-1 line-clamp-3 leading-relaxed">
                      {getDescription(video)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* dots */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMobileIndex(i);
                    scrollToMobileIndex(i);
                    setPlayingId(null);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === mobileIndex
                      ? 'w-6 h-2 bg-primary-light'
                      : 'w-2 h-2 bg-white/25 hover:bg-primary-light/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Desktop ── */}
        {!isMobile && (
          <div>
            <div className="flex justify-end mb-6">
              <Button
                onClick={() => navigate('/videos')}
                className="border-primary-light text-primary-light hover:bg-primary-light/10"
              >
                {t('videos.view_all') || 'View All'} →
              </Button>
            </div>

            <div className="relative">
              <button
                onClick={prev}
                disabled={startIndex === 0}
                className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${arrowBase}`}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="overflow-hidden mx-6">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    gap: `${gapPx}px`,
                    transform: `translateX(calc(-${startIndex * cardWidthPercent}% - ${startIndex * gapPx}px))`,
                  }}
                >
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="shrink-0 flex flex-col gap-3"
                      style={{
                        width: `calc(${cardWidthPercent}% - ${(gapPx * (visibleCount - 1)) / visibleCount}px)`,
                      }}
                    >
                      <VideoCard video={video} />
                      <div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide leading-snug">
                          {getTitle(video)}
                        </h3>
                        <p className="text-primary-lighter/80 text-sm italic mt-1 line-clamp-3 leading-relaxed">
                          {getDescription(video)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                disabled={startIndex === maxIndex}
                className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${arrowBase}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* dots */}
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
                        ? 'w-6 h-2 bg-primary-light'
                        : 'w-2 h-2 bg-white/25 hover:bg-primary-light/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;
