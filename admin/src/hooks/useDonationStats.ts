import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';
import useAdminAuth from '@/hooks/useAdminAuth';
import type { DonationStats } from '@/types/ui.type';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function useDonationStats() {
  const { token } = useAdminAuth();
  const [stats, setStats] = useState<DonationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const lastFetched = useRef<number | null>(null);

  useEffect(() => {
    async function fetchStats() {
      // skip fetch if cache is still fresh
      if (
        lastFetched.current &&
        Date.now() - lastFetched.current < CACHE_DURATION
      ) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(API_ENDPOINTS.donationStats, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(data.data);
        lastFetched.current = Date.now();
      } catch (err) {
        setError('Failed to load stats');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, [token]);

  return { stats, loading, error };
}

export default useDonationStats;
