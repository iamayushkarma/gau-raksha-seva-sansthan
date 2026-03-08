import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import useAdminAuth from '@/hooks/useAdminAuth';
import { API_ENDPOINTS } from '@/config/login-api';

function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const username = (
      form.elements.namedItem('username') as HTMLInputElement
    ).value.trim();
    const password = (form.elements.namedItem('password') as HTMLInputElement)
      .value;

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(API_ENDPOINTS.adminLogin, {
        username,
        password,
      });
      console.log('response data:', data);
      console.log('token:', data.data.token);
      login(data.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Something went wrong');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold text-text-primary">
          Gau Raksha Seva Sansthan
        </h1>
        <p className="text-xs text-text-secondary mt-1">
          Dashboard Management Portal
        </p>
      </div>

      <div className="w-full max-w-md bg-surface border border-border rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Welcome Back
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Enter your username and password to access your account.
          </p>
        </div>

        {error && (
          <div className="mb-4 px-4 py-2.5 rounded-md bg-error/10 border border-error/20 text-error text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
          />

          <Input
            label="Password"
            name="password"
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

          <div className="flex items-center justify-between text-xs">
            <a href="#" className="text-primary hover:text-primary-dark">
              Forgot Your Password?
            </a>
          </div>

          <Button type="submit" loading={loading}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
