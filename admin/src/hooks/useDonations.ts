import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';
import useAdminAuth from '@/hooks/useAdminAuth';

export type Donation = {
  id: number;
  name: string | null;
  phone: string | null;
  amount: number;
  seva: string;
  is_anonymous: number;
  created_at: string;
};

type PaginationState = {
  hasNextPage: boolean;
  nextCursor: number | null;
  total: number;
};

function useDonations(limit = 10) {
  const { token } = useAdminAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    hasNextPage: false,
    nextCursor: null,
    total: 0,
  });
  const [cursorHistory, setCursorHistory] = useState<(number | null)[]>([null]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchDonations = useCallback(
    async (cursor: number | null, searchTerm: string) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set('limit', String(limit));
        if (cursor) params.set('cursor', String(cursor));
        if (searchTerm) params.set('search', searchTerm);

        const { data } = await axios.get(
          `${API_ENDPOINTS.donations}?${params.toString()}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setDonations(data.data.donations ?? []);
        setPagination({
          hasNextPage: data.data.hasNextPage,
          nextCursor: data.data.nextCursor,
          total: data.data.total,
        });
      } catch (err) {
        setError('Failed to load donations');
      } finally {
        setLoading(false);
      }
    },
    [token, limit]
  );

  useEffect(() => {
    const cursor = cursorHistory[currentPageIndex];
    fetchDonations(cursor, search);
  }, [currentPageIndex, search]);

  function goToNextPage() {
    if (!pagination.hasNextPage || !pagination.nextCursor) return;
    const newHistory = [
      ...cursorHistory.slice(0, currentPageIndex + 1),
      pagination.nextCursor,
    ];
    setCursorHistory(newHistory);
    setCurrentPageIndex((prev) => prev + 1);
  }

  function goToPrevPage() {
    if (currentPageIndex === 0) return;
    setCurrentPageIndex((prev) => prev - 1);
  }

  function handleSearch(term: string) {
    setSearch(term);
    setCurrentPageIndex(0);
    setCursorHistory([null]);
  }

  return {
    donations,
    pagination,
    loading,
    error,
    currentPage: currentPageIndex + 1,
    totalPages: Math.ceil(pagination.total / limit),
    goToNextPage,
    goToPrevPage,
    handleSearch,
    search,
  };
}

export default useDonations;
