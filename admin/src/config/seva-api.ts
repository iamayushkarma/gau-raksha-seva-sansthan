import axios from 'axios';
import type { DonationOption, FormData } from '@/types/ui.type';

const BASE = '/api/v1/donation-options';

export const sevaApi = {
  getAll: async (): Promise<DonationOption[]> => {
    const { data } = await axios.get(BASE);
    return Array.isArray(data)
      ? data
      : Array.isArray(data.data)
        ? data.data
        : [];
  },

  create: async (form: FormData): Promise<void> => {
    await axios.post(BASE, form);
  },

  update: async (id: number, form: FormData): Promise<void> => {
    await axios.put(`${BASE}/${id}`, form);
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE}/${id}`);
  },
};
