import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from '@/pages/AdminLogin';
import MainLayout from '@/layouts/MainLayout';
import AdminDashboard from '@/pages/AdminDashboard';

function AdminRoutes() {
  const token = localStorage.getItem('adminToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            token ? <MainLayout /> : <Navigate to="/admin/login" replace />
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AdminRoutes;
