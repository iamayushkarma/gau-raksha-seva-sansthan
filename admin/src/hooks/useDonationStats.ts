import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';
import useAdminAuth from '@/hooks/useAdminAuth';
import type { DonationStats } from '@/types/ui.type';

function useDonationStats() {
  const { token } = useAdminAuth();
  const [stats, setStats] = useState<DonationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchStats() {
      try {
        const { data } = await axios.get(API_ENDPOINTS.donationStats, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(data.data);
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
