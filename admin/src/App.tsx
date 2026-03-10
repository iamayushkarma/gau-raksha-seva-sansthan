import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from '@/pages/AdminLogin';
import MainLayout from '@/layouts/MainLayout';
import AdminDashboard from '@/pages/AdminDashboard';
import Donors from '@/pages/Donars';
import SevaManagement from '@/pages/SevaManagement';
import SiteSettings from '@/pages/SiteSettings';
import Profile from '@/pages/Profile';
import useAdminAuth from '@/hooks/useAdminAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAdminAuth();
  return token ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/admin/login" replace />} />

        {/* Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="donors" element={<Donors />} />
          <Route path="seva-management" element={<SevaManagement />} />
          <Route path="site-settings" element={<SiteSettings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
