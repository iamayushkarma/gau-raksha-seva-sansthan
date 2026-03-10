type AdminUser = {
  id: number;
  username: string;
  email: string;
  role: string;
};

type AdminAuthContextType = {
  token: string | null;
  admin: AdminUser | null;
  login: (token: string, admin: AdminUser) => void;
  logout: () => void;
};

export type { AdminUser, AdminAuthContextType };
