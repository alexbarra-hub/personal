import { useState } from 'react';
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === 'admin123') {
      sessionStorage.setItem('admin_authenticated', 'true');
      onLogin();
    } else {
      setError('Incorrect password');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-slate-100 rounded-full">
              <Lock className="w-8 h-8 text-slate-700" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Admin Access
          </h2>
          <p className="text-slate-600 text-center mb-6">
            Enter password to view analytics
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-4">
            Default password: admin123
          </p>
        </div>
      </div>
    </div>
  );
}
