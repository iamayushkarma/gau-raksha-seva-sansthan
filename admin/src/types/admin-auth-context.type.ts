interface AdminAuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export type { AdminAuthContextType };
