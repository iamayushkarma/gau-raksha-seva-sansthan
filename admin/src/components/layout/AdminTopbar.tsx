import { Search } from 'lucide-react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';

function AdminTopbar() {
  const navigate = useNavigate();
  const { admin } = useAdminAuth();
  return (
    <header className="h-20 bg-surface border-b border-border flex justify-center">
      <div className="w-[95%] flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative">
          <input
            placeholder="Search doners and more..."
            className="w-96 outline-none placeholder:text-sm shadow pl-10 rounded-lg h-10 bg-background"
          ></input>
          <div className="absolute bottom-2.5 left-2.5">
            <Search className="size-4.5 text-text-secondary" />
          </div>
        </div>
        {/* User Controls */}
        <div
          onClick={() => navigate('/admin/profile')}
          className="flex gap-3 border-l border-border pl-4 cursor-pointer"
        >
          <div className="size-10 flex items-center justify-center rounded-full bg-primary/70 text-text-on-primary">
            <p className="uppercase font-semibold">{admin?.username[0]}</p>
          </div>
          <div>
            <h3 className="font-medium text-md text-text-primary">
              {admin?.username}
            </h3>
            <p className="text-text-secondary text-sm">{admin?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;
