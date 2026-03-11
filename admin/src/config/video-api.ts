import axios from 'axios';
import type { Video, VideoFormData } from '@/types/video.types';

const BASE = '/api/v1/videos';

export const videoApi = {
  getAll: async (): Promise<Video[]> => {
    const { data } = await axios.get(BASE);
    return Array.isArray(data)
      ? data
      : Array.isArray(data.data)
        ? data.data
        : [];
  },

  create: async (form: VideoFormData): Promise<void> => {
    await axios.post(BASE, form);
  },

  update: async (id: number, form: VideoFormData): Promise<void> => {
    await axios.put(`${BASE}/${id}`, form);
  },

  remove: async (id: number): Promise<void> => {
    await axios.delete(`${BASE}/${id}`);
  },
};
