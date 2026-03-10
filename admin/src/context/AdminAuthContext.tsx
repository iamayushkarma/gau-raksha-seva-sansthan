import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  AdminAuthContextType,
  AdminUser,
} from '@/types/admin-auth-context.type';

export const AdminAuthContext = createContext<AdminAuthContextType | null>(
  null
);

function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('adminToken')
  );
  const [admin, setAdmin] = useState<AdminUser | null>(() => {
    const stored = localStorage.getItem('adminUser');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (token: string, adminData: AdminUser) => {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminUser', JSON.stringify(adminData));
    setToken(token);
    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setToken(null);
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ token, admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthProvider;
