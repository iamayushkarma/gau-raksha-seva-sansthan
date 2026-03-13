import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminTopbar from '@/components/layout/AdminTopbar';

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background dark:bg-dark-background overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <AdminTopbar setSidebarOpen={setSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
