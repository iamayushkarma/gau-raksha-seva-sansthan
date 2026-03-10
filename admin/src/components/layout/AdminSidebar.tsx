import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  HandHeart,
  Settings,
  User,
  LogOut,
} from 'lucide-react';
import useAdminAuth from '@/hooks/useAdminAuth';

const NAV_LINKS = [
  {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    link: '/admin/dashboard',
  },
  { icon: <Users size={18} />, label: 'Donors', link: '/admin/donors' },
  {
    icon: <HandHeart size={18} />,
    label: 'Seva Management',
    link: '/admin/seva-management',
  },
  {
    icon: <Settings size={18} />,
    label: 'Site Settings',
    link: '/admin/site-settings',
  },
  { icon: <User size={18} />, label: 'Profile', link: '/admin/profile' },
];

function AdminSidebar() {
  const { logout } = useAdminAuth();
  return (
    <div className="w-72 border-r flex flex-col border-border bg-surface">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <img
          className="size-10 rounded-lg"
          src="https://placehold.co/40x40"
          alt="logo"
        />
        <div>
          <h2 className="font-bold text-text-primary text-lg leading-tight">
            Gau Raksha
          </h2>
          <p className="text-xs text-text-secondary font-medium">Admin Panel</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {NAV_LINKS.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-3 text-[0.9rem] px-4 py-2 rounded-xl font-semibold transition-colors hover:bg-background
              ${
                isActive
                  ? 'bg-background text-text-primary'
                  : ' hover:text-text-primary text-text-secondary'
              }`
            }
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={logout}
          className="flex w-full items-center gap-2.5 px-4 py-3 rounded-xl text-error hover:text-red-600 cursor-pointer transition-colors"
        >
          <LogOut className="size-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
