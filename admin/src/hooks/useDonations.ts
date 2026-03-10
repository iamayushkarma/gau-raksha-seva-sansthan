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

export type DonationFilters = {
  search: string;
  sortBy: 'id' | 'amount' | 'created_at';
  sortOrder: 'asc' | 'desc';
  filterType: '' | 'week' | 'month' | 'year' | 'custom';
  dateFrom: string;
  dateTo: string;
  seva: string;
  type: '' | 'anonymous' | 'named';
};

const DEFAULT_FILTERS: DonationFilters = {
  search: '',
  sortBy: 'id',
  sortOrder: 'desc',
  filterType: '',
  dateFrom: '',
  dateTo: '',
  seva: '',
  type: '',
};

function useDonations(limit = 10) {
  const { token } = useAdminAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [pagination, setPagination] = useState({
    hasNextPage: false,
    nextCursor: null as number | null,
    total: 0,
  });
  const [cursorHistory, setCursorHistory] = useState<(number | null)[]>([null]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState<DonationFilters>(DEFAULT_FILTERS);

  const fetchDonations = useCallback(
    async (cursor: number | null, currentFilters: DonationFilters) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set('limit', String(limit));
        if (cursor) params.set('cursor', String(cursor));
        if (currentFilters.search) params.set('search', currentFilters.search);
        if (currentFilters.sortBy) params.set('sortBy', currentFilters.sortBy);
        if (currentFilters.sortOrder)
          params.set('sortOrder', currentFilters.sortOrder);
        if (currentFilters.filterType)
          params.set('filterType', currentFilters.filterType);
        if (currentFilters.dateFrom)
          params.set('dateFrom', currentFilters.dateFrom);
        if (currentFilters.dateTo) params.set('dateTo', currentFilters.dateTo);
        if (currentFilters.seva) params.set('seva', currentFilters.seva);
        if (currentFilters.type) params.set('type', currentFilters.type);

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
    fetchDonations(cursor, filters);
  }, [currentPageIndex, filters]);

  function resetPagination() {
    setCurrentPageIndex(0);
    setCursorHistory([null]);
  }

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
    setFilters((prev) => ({ ...prev, search: term }));
    resetPagination();
  }

  function handleFilterChange(newFilters: Partial<DonationFilters>) {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    resetPagination();
  }

  function clearFilters() {
    setFilters(DEFAULT_FILTERS);
    resetPagination();
  }

  return {
    donations,
    pagination,
    loading,
    error,
    filters,
    currentPage: currentPageIndex + 1,
    totalPages: Math.max(1, Math.ceil(pagination.total / limit)),
    goToNextPage,
    goToPrevPage,
    handleSearch,
    handleFilterChange,
    clearFilters,
  };
}

export default useDonations;
