function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
          Dashboard
        </h1>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
          Overview of your gaushala
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-5 shadow-sm"
          >
            <p className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mt-1">
              {stat.value}
            </p>
            <p className="text-xs text-success mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const stats = [
  { label: 'Total Donations', value: '₹1,24,500', change: '+12% this month' },
  { label: 'Total Donors', value: '348', change: '+5 this week' },
  { label: 'Cows Sheltered', value: '212', change: '+3 this month' },
  { label: 'Pending Reports', value: '7', change: '2 urgent' },
];

export default AdminDashboard;
