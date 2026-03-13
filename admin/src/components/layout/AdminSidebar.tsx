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
    icon: <HandHeart size={18} />,
    label: 'Video Management',
    link: '/admin/video-management',
  },
  {
    icon: <Settings size={18} />,
    label: 'Site Settings',
    link: '/admin/site-settings',
  },
  { icon: <User size={18} />, label: 'Profile', link: '/admin/profile' },
];

interface SidebarProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

function AdminSidebar({ open, setOpen }: SidebarProps) {
  const { logout } = useAdminAuth();

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`
        fixed md:static z-40
        top-0 left-0 h-full w-72
        border-r border-border bg-surface
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        flex flex-col
        `}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <img
            className="size-10 rounded-lg"
            src="/logo/logo-192x192.png"
            alt="logo"
          />
          <div>
            <h2 className="font-bold text-text-primary text-lg leading-tight">
              Gau Raksha
            </h2>
            <p className="text-xs text-text-secondary font-medium">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {NAV_LINKS.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 text-[0.9rem] px-4 py-2 rounded-xl font-semibold transition-colors hover:bg-background
                ${
                  isActive
                    ? 'bg-background text-text-primary'
                    : 'hover:text-text-primary text-text-secondary'
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <button
            onClick={logout}
            className="flex w-full items-center gap-2.5 px-4 py-3 rounded-xl text-error hover:text-red-600 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
