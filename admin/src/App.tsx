import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from '@/pages/AdminLogin';
import MainLayout from '@/layouts/MainLayout';
import AdminDashboard from '@/pages/AdminDashboard';
import useAdminAuth from '@/hooks/useAdminAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAdminAuth();
  return token ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
