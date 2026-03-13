import { Menu } from 'lucide-react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';

interface AdminTopbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AdminTopbar({ setSidebarOpen }: AdminTopbarProps) {
  const navigate = useNavigate();
  const { admin } = useAdminAuth();

  return (
    <header className="h-16 bg-surface border-b border-border flex justify-center">
      <div className="w-[95%] flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu size={22} />
          </button>
        </div>

        {/* User */}
        <div
          onClick={() => navigate('/admin/profile')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="size-9 flex items-center justify-center rounded-full bg-primary/70 text-text-on-primary">
            <span className="uppercase font-semibold text-sm">
              {admin?.username?.[0]}
            </span>
          </div>

          <div className="hidden sm:block">
            <h3 className="font-medium text-sm text-text-primary">
              {admin?.username}
            </h3>
            <p className="text-text-secondary text-xs">{admin?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;
