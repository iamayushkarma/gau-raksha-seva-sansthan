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
    <div className="p-6 bg-background min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight">
          Donors
        </h2>
        <p className="text-text-secondary text-sm mt-1">
          Manage and view all donation records.
        </p>
      </div>

      <div className="bg-surface border border-border rounded-xl shadow-sm">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-48">
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
              className="flex items-center gap-1 px-3 py-2 text-sm text-error hover:bg-error/10 rounded-lg transition-colors"
            >
              <X size={14} />
              Clear
            </button>
          )}

          {/* Total */}
          <span className="text-sm text-text-secondary ml-auto">
            {pagination.total} donors
          </span>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="p-4 border-b border-border bg-background flex flex-wrap gap-4">
            {/* Date filter */}
            <div className="flex flex-col gap-1 min-w-36">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
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
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-2.5 text-text-tertiary pointer-events-none"
                />
              </div>
            </div>

            {/* Custom date range */}
            {filters.filterType === 'custom' && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                    From
                  </label>
                  <input
                    type="date"
                    value={filters.dateFrom}
                    onChange={(e) =>
                      handleFilterChange({ dateFrom: e.target.value })
                    }
                    className="pl-3 pr-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                    To
                  </label>
                  <input
                    type="date"
                    value={filters.dateTo}
                    onChange={(e) =>
                      handleFilterChange({ dateTo: e.target.value })
                    }
                    className="pl-3 pr-3 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                  />
                </div>
              </>
            )}

            {/* Seva filter */}
            <div className="flex flex-col gap-1 min-w-48">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                Seva
              </label>
              <div className="relative">
                <select
                  value={filters.seva}
                  onChange={(e) => handleFilterChange({ seva: e.target.value })}
                  className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                >
                  <option value="">All sevas</option>
                  {sevaOptions.map((s) => (
                    <option key={s.id} value={s.title_en}>
                      {s.title_en}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-2.5 text-text-tertiary pointer-events-none"
                />
              </div>
            </div>

            {/* Type filter */}
            <div className="flex flex-col gap-1 min-w-32">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                Type
              </label>
              <div className="relative">
                <select
                  value={filters.type}
                  onChange={(e) =>
                    handleFilterChange({
                      type: e.target.value as DonationFilters['type'],
                    })
                  }
                  className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                >
                  <option value="">All</option>
                  <option value="named">Named</option>
                  <option value="anonymous">Anonymous</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-2.5 text-text-tertiary pointer-events-none"
                />
              </div>
            </div>

            {/* Sort by */}
            <div className="flex flex-col gap-1 min-w-36">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                Sort by
              </label>
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    handleFilterChange({
                      sortBy: e.target.value as DonationFilters['sortBy'],
                    })
                  }
                  className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                >
                  <option value="id">Latest first</option>
                  <option value="amount">Amount</option>
                  <option value="created_at">Date</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-2.5 text-text-tertiary pointer-events-none"
                />
              </div>
            </div>

            {/* Sort order */}
            <div className="flex flex-col gap-1 min-w-32">
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                Order
              </label>
              <div className="relative">
                <select
                  value={filters.sortOrder}
                  onChange={(e) =>
                    handleFilterChange({
                      sortOrder: e.target.value as 'asc' | 'desc',
                    })
                  }
                  className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-lg bg-surface outline-none focus:border-primary"
                >
                  <option value="desc">High → Low / Newest</option>
                  <option value="asc">Low → High / Oldest</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-2.5 text-text-tertiary pointer-events-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
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
                    className={`px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider
                      ${h === 'Action' ? 'text-right' : 'text-left'}`}
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
                      <td key={j} className="px-6 py-4">
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
                    className="border-b border-border hover:bg-hover transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                          {getInitials(d.is_anonymous ? null : d.name)}
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {d.is_anonymous ? 'Anonymous' : d.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {d.is_anonymous ? '—' : d.phone}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-text-primary">
                      ₹{Number(d.amount).toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {d.seva}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {formatDate(d.created_at)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium
                        ${
                          d.is_anonymous
                            ? 'bg-warning/10 text-warning'
                            : 'bg-success/10 text-success'
                        }`}
                      >
                        {d.is_anonymous ? 'Anonymous' : 'Named'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-text-tertiary hover:text-text-primary transition-colors">
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <p className="text-sm text-text-secondary">
            Page {currentPage} of {totalPages} · {pagination.total} total
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1 || loading}
              className="px-4 py-1.5 text-sm border border-border rounded-lg text-text-secondary hover:bg-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            <span className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg font-medium min-w-8 text-center">
              {currentPage}
            </span>
            <button
              onClick={goToNextPage}
              disabled={!pagination.hasNextPage || loading}
              className="px-4 py-1.5 text-sm border border-border rounded-lg text-text-secondary hover:bg-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
