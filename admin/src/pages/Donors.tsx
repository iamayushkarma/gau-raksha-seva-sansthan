import { useState } from 'react';
import {
  Search,
  MoreVertical,
  SlidersHorizontal,
  X,
  ChevronDown,
} from 'lucide-react';

import useDonations from '@/hooks/useDonations';
import type { DonationFilters } from '@/hooks/useDonations';
import useSevaOptions from '@/hooks/useSevaOptions';

function Donors() {
  const {
    donations,
    pagination,
    loading,
    filters,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    handleSearch,
    handleFilterChange,
    clearFilters,
  } = useDonations(10);

  const [showFilters, setShowFilters] = useState(false);
  const sevaOptions = useSevaOptions();

  const hasActiveFilters =
    filters.filterType ||
    filters.seva ||
    filters.type ||
    filters.sortBy !== 'id' ||
    filters.sortOrder !== 'desc';

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  function getInitials(name: string | null) {
    if (!name) return 'AN';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-background min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
          Donors
        </h2>
        <p className="text-text-secondary text-sm mt-1">
          Manage and view all donation records.
        </p>
      </div>

      <div className="bg-surface border border-border rounded-xl shadow-sm">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Search */}
          <div className="relative w-full sm:flex-1">
            <input
              value={filters.search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search donor, phone, seva..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background outline-none focus:border-primary"
            />
            <Search className="absolute left-2.5 top-2.5 size-4 text-text-tertiary" />
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-colors
              ${
                showFilters || hasActiveFilters
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-text-secondary hover:bg-hover'
              }`}
          >
            <SlidersHorizontal size={15} />
            Filters
            {hasActiveFilters && (
              <span className="size-2 rounded-full bg-primary" />
            )}
          </button>

          {/* Clear filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2 text-sm text-error hover:bg-error/10 rounded-lg"
            >
              <X size={14} />
              Clear
            </button>
          )}

          {/* Total */}
          <span className="text-sm text-text-secondary sm:ml-auto">
            {pagination.total} donors
          </span>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="p-4 border-b border-border bg-background grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Period */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-text-secondary uppercase">
                Period
              </label>

              <div className="relative">
                <select
                  value={filters.filterType}
                  onChange={(e) =>
                    handleFilterChange({
                      filterType: e.target
                        .value as DonationFilters['filterType'],
                      dateFrom: '',
                      dateTo: '',
                    })
                  }
                  className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                >
                  <option value="">All time</option>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                  <option value="year">This year</option>
                  <option value="custom">Custom range</option>
                </select>

                <ChevronDown className="absolute right-2.5 top-2.5 size-4 text-text-tertiary pointer-events-none" />
              </div>
            </div>

            {/* Custom dates */}
            {filters.filterType === 'custom' && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary uppercase">
                    From
                  </label>

                  <input
                    type="date"
                    value={filters.dateFrom}
                    onChange={(e) =>
                      handleFilterChange({ dateFrom: e.target.value })
                    }
                    className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary uppercase">
                    To
                  </label>

                  <input
                    type="date"
                    value={filters.dateTo}
                    onChange={(e) =>
                      handleFilterChange({ dateTo: e.target.value })
                    }
                    className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                  />
                </div>
              </>
            )}

            {/* Seva */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-secondary uppercase">
                Seva
              </label>

              <select
                value={filters.seva}
                onChange={(e) => handleFilterChange({ seva: e.target.value })}
                className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
              >
                <option value="">All sevas</option>

                {sevaOptions.map((s) => (
                  <option key={s.id} value={s.title_en}>
                    {s.title_en}
                  </option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-secondary uppercase">
                Type
              </label>

              <select
                value={filters.type}
                onChange={(e) =>
                  handleFilterChange({
                    type: e.target.value as DonationFilters['type'],
                  })
                }
                className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
              >
                <option value="">All</option>
                <option value="named">Named</option>
                <option value="anonymous">Anonymous</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-secondary uppercase">
                Sort by
              </label>

              <select
                value={filters.sortBy}
                onChange={(e) =>
                  handleFilterChange({
                    sortBy: e.target.value as DonationFilters['sortBy'],
                  })
                }
                className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
              >
                <option value="id">Latest first</option>
                <option value="amount">Amount</option>
                <option value="created_at">Date</option>
              </select>
            </div>

            {/* Order */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-secondary uppercase">
                Order
              </label>

              <select
                value={filters.sortOrder}
                onChange={(e) =>
                  handleFilterChange({
                    sortOrder: e.target.value as 'asc' | 'desc',
                  })
                }
                className="px-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
              >
                <option value="desc">High → Low / Newest</option>
                <option value="asc">Low → High / Oldest</option>
              </select>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="border-b border-border bg-background">
                {[
                  'Donor Name',
                  'Phone',
                  'Amount',
                  'Seva',
                  'Date',
                  'Type',
                  'Action',
                ].map((h) => (
                  <th
                    key={h}
                    className={`px-4 sm:px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider ${
                      h === 'Action' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                [...Array(10)].map((_, i) => (
                  <tr key={i} className="border-b border-border animate-pulse">
                    {[...Array(7)].map((_, j) => (
                      <td key={j} className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="h-4 bg-border rounded w-24" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : donations.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-16 text-center text-text-secondary text-sm"
                  >
                    No donations found
                  </td>
                </tr>
              ) : (
                donations.map((d) => (
                  <tr
                    key={d.id}
                    className="border-b border-border hover:bg-hover"
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                          {getInitials(d.is_anonymous ? null : d.name)}
                        </div>

                        <span className="text-sm font-medium text-text-primary">
                          {d.is_anonymous ? 'Anonymous' : d.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-text-secondary">
                      {d.is_anonymous ? '—' : d.phone}
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-text-primary">
                      ₹{Number(d.amount).toLocaleString('en-IN')}
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-text-secondary">
                      {d.seva}
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-text-secondary">
                      {formatDate(d.created_at)}
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          d.is_anonymous
                            ? 'bg-warning/10 text-warning'
                            : 'bg-success/10 text-success'
                        }`}
                      >
                        {d.is_anonymous ? 'Anonymous' : 'Named'}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                      <button className="text-text-tertiary hover:text-text-primary">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-border">
          <p className="text-sm text-text-secondary">
            Page {currentPage} of {totalPages} · {pagination.total} total
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1 || loading}
              className="px-4 py-1.5 text-sm border border-border rounded-lg text-text-secondary hover:bg-hover disabled:opacity-40"
            >
              ← Prev
            </button>

            <span className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg font-medium">
              {currentPage}
            </span>

            <button
              onClick={goToNextPage}
              disabled={!pagination.hasNextPage || loading}
              className="px-4 py-1.5 text-sm border border-border rounded-lg text-text-secondary hover:bg-hover disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donors;
