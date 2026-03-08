import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Top Heading */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold text-text-primary">
          Gau Raksha Seva Sansthan
        </h1>
        <p className="text-xs text-text-secondary mt-1">
          Dashboard Management Portal
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-surface border border-border rounded-lg shadow-md p-8">
        {/* Card Heading */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Welcome Back
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Enter your email and password to access your account.
          </p>
        </div>

        <form className="space-y-4">
          {/* Username */}
          <Input label="Username" placeholder="Enter your username" />

          {/* Password */}
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-text-secondary hover:text-primary"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-xs">
            <a href="#" className="text-primary hover:text-primary-dark">
              Forgot Your Password?
            </a>
          </div>

          {/* Button */}
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
