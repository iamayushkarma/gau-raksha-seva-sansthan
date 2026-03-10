import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

type SevaOption = {
  id: number;
  title_en: string;
};

function useSevaOptions() {
  const [sevaOptions, setSevaOptions] = useState<SevaOption[]>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(API_ENDPOINTS.donationOptions);
        console.log('data.data', data.data);
        setSevaOptions(data.data);
      } catch (err) {
        console.error('Failed to load seva options');
      }
    }
    fetch();
  }, []);

  return sevaOptions;
}

export default useSevaOptions;
