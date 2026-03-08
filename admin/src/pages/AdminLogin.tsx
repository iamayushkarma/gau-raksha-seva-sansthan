import { User, Lock, LogIn } from 'lucide-react';

function AdminLogin() {
  return (
    <div className="min-h-screen bg-background dark:bg-dark-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-primary rounded-full" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Admin Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary">
            Welcome back
          </h1>
          <p className="text-text-secondary dark:text-dark-text-secondary text-sm mt-1">
            Sign in to manage your gaushala
          </p>
        </div>

        <div className="bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-6 sm:p-8 shadow-md">
          <form className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary text-sm placeholder:text-text-disabled dark:placeholder:text-dark-text-disabled focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary text-sm placeholder:text-text-disabled dark:placeholder:text-dark-text-disabled focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-text-onPrimary font-semibold py-2.5 rounded-lg transition"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
