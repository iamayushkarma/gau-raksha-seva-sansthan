import React from 'react';
import { ArrowRight, Search, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useDonations from '@/hooks/useDonations';

const DonationListOverview = React.memo(function DonationListOverview() {
  const navigate = useNavigate();
  const {
    donations,
    pagination,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    handleSearch,
  } = useDonations(10);

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
    <div className="bg-surface rounded-2xl mt-10 border border-border shadow">
      {/* Heading */}
      <div className="p-6 flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg font-bold">Recent Donations</h2>
        <div className="flex items-center gap-4">
          {/* Search */}
          {/* <div className="relative">
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search donor, seva..."
              className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background outline-none focus:border-primary w-56"
            />
            <Search className="absolute left-2.5 top-2.5 size-4 text-text-tertiary" />
          </div> */}
          {/* View all */}
          <button
            onClick={() => navigate('/admin/donors')}
            className="text-primary cursor-pointer font-medium group flex gap-1 items-center"
          >
            View all
            <ArrowRight className="size-4 group-hover:translate-x-0.5 duration-200 ease-in transition-all" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-border bg-background">
              {['Donor Name', 'Amount', 'Seva', 'Date', 'Type', 'Action'].map(
                (h) => (
                  <th
                    key={h}
                    className={`px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider
                    ${h === 'Action' ? 'text-right' : 'text-left'}`}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(10)].map((_, i) => (
                <tr key={i} className="border-b border-border animate-pulse">
                  {[...Array(6)].map((_, j) => (
                    <td key={j} className="px-6 py-4">
                      <div className="h-4 bg-border rounded w-24" />
                    </td>
                  ))}
                </tr>
              ))
            ) : donations.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
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
  );
});

export default DonationListOverview;
