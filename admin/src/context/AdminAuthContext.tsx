import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AdminAuthContextType } from '@/types/admin-auth-context.type';

export const AdminAuthContext = createContext<AdminAuthContextType | null>(
  null
);

function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('adminToken')
  );

  const login = (token: string) => {
    localStorage.setItem('adminToken', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  return (
    <AdminAuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthProvider;
