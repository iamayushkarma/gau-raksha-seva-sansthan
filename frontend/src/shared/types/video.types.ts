export interface Video {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  youtube_url: string; // full YouTube URL e.g. https://www.youtube.com/watch?v=XXX
  thumbnail?: string; // custom thumbnail URL or auto-generated
  is_active?: boolean;
  order_index?: number;
  created_at?: string;
}
export type VideoUI = {
  id: number;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  youtube_url: string;
  thumbnail?: string;
};

export type VideoFormData = Omit<Video, 'id' | 'is_active' | 'created_at'>;

export const emptyVideoForm: VideoFormData = {
  title_en: '',
  title_hi: '',
  description_en: '',
  description_hi: '',
  youtube_url: '',
  thumbnail: '',
  order_index: 0,
};

// Extract YouTube video ID from any YouTube URL format
export function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Get YouTube thumbnail from URL
export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

// Get YouTube embed URL
export function getYouTubeEmbed(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : '';
}
