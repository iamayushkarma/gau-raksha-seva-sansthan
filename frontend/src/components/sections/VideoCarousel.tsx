import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { videoApi } from '@/config/video-api';
import { getYouTubeThumbnail, getYouTubeEmbed } from '@/types/video.types';
import type { Video } from '@/types/video.types';
import { useNavigate } from 'react-router-dom';

const VideoCarousel: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);

  // track window width to decide how many cards to show
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // fetch max 5 videos on mount
  useEffect(() => {
    videoApi
      .getAll()
      .then((data) => setVideos(data.slice(0, 5)))
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, []);

  // update width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1 card on mobile, 2 on tablet, 3 on desktop
  const visibleCount = Math.min(
    windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3,
    videos.length
  );

  // get correct language title
  const getTitle = (v: Video) =>
    i18n.language === 'hi' ? v.title_hi || v.title_en : v.title_en;

  // get correct language description
  const getDescription = (v: Video) =>
    i18n.language === 'hi'
      ? v.description_hi || v.description_en
      : v.description_en;

  // move carousel left
  const prev = () => {
    setPlayingId(null);
    setStartIndex((i) => Math.max(0, i - 1));
  };

  // move carousel right
  const next = () => {
    setPlayingId(null);
    setStartIndex((i) => Math.min(videos.length - visibleCount, i + 1));
  };

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < videos.length;

  // only slice the videos that should be visible right now
  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  // loading skeleton
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
    <section className="py-16 lg:px-16 md:px-12 sm:px-8 px-4">
      {/* section heading and subheading */}
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
        {/* view all button aligned to the right */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate('/videos')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            {t('videos.view_all') || 'View All'} →
          </button>
        </div>

        {/* carousel wrapper — relative so absolute buttons stay inside */}
        <div className="relative px-6">
          {/* left arrow — sits outside the cards on the left */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-300 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* video cards grid — responsive columns controlled by visibleCount logic above */}
          <div
            className={`grid gap-6 ${
              visibleCount === 1
                ? 'grid-cols-1'
                : visibleCount === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-3'
            }`}
          >
            {visibleVideos.map((video) => {
              const thumb =
                video.thumbnail || getYouTubeThumbnail(video.youtube_url);
              const embedUrl = getYouTubeEmbed(video.youtube_url);
              const isPlaying = playingId === video.id;

              return (
                <div key={video.id} className="flex flex-col gap-3">
                  {/* video player or thumbnail */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    {isPlaying ? (
                      // youtube iframe when user clicks play
                      <iframe
                        src={embedUrl}
                        title={getTitle(video)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // thumbnail with hover play button
                      <div
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => setPlayingId(video.id)}
                      >
                        <img
                          src={thumb}
                          alt={getTitle(video)}
                          className="w-full h-full object-cover"
                        />
                        {/* dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        {/* centered play button */}
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

                  {/* title and description below the video */}
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

          {/* right arrow — sits outside the cards on the right */}
          <button
            onClick={next}
            disabled={!canNext}
            className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-300 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* dot indicators at the bottom to show position */}
        {videos.length > visibleCount && (
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: videos.length - visibleCount + 1 }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setStartIndex(i);
                    setPlayingId(null);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === startIndex
                      ? 'w-5 h-2 bg-primary'
                      : 'w-2 h-2 bg-gray-300'
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;
