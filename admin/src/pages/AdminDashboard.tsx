import DonationListOverview from '@/components/common/DonationListOverview';
import StatCard from '@/components/common/StatCard';
import StatCardSkeleton from '@/components/common/StatCardSkeleton';
import useDonationStats from '@/hooks/useDonationStats';
import { Landmark, Users, HandHeart, UserX } from 'lucide-react';

function AdminDashboard() {
  const { stats, loading } = useDonationStats();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-background min-h-screen">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
          Overview Dashboard
        </h2>

        <p className="text-text-secondary text-sm mt-1">
          Welcome back, here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {loading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard
              label="Total Donations"
              value={`₹${Number(stats?.total_amount).toLocaleString('en-IN')}`}
              icon={<Landmark size={18} color="#6366f1" />}
              iconBg="rgba(99,102,241,0.12)"
              info="All time"
            />

            <StatCard
              label="Total Donors"
              value={stats?.total_donors}
              icon={<Users size={18} color="#10b981" />}
              iconBg="rgba(16,185,129,0.12)"
              info="All time"
            />

            <StatCard
              label="Seva Types"
              value={stats?.total_sevas}
              icon={<HandHeart size={18} color="#f59e0b" />}
              iconBg="rgba(245,158,11,0.12)"
              info="Unique sevas"
            />

            <StatCard
              label="Anonymous"
              value={stats?.anonymous_count}
              icon={<UserX size={18} color="#ef4444" />}
              iconBg="rgba(239,68,68,0.12)"
              info="Anonymous donations"
            />
          </>
        )}
      </div>

      {/* Donation list */}
      <DonationListOverview />
    </div>
  );
}

export default AdminDashboard;
