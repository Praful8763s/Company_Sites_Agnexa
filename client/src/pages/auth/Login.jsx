import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, Lock, Mail, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/common/SEO';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(email, password);
      if (data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(from === '/' ? '/dashboard' : from);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const autofillAdmin = () => {
    setEmail('admin@agnexa.com');
    setPassword('Admin@123');
  };

  const autofillClient = () => {
    setEmail('client@example.com');
    setPassword('Admin@123');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-4">
      <SEO title="Client & Admin Login" description="Sign in to Agnexa Technologies enterprise client portal or administration dashboard." />

      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
        <div className="text-center mb-8 space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 mx-auto mb-3 shadow-neon-blue flex items-center justify-center">
            <img src="/logo.png" alt="Agnexa" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-white">Agnexa Client Portal</h1>
          <p className="text-xs text-slate-400">Sign in to review project milestones and manage consultations.</p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center space-x-2 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300">Password</label>
              <Link to="/forgot-password" className="text-xs text-agnexa-blue-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 hover:from-agnexa-blue-600 hover:to-agnexa-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
          </button>
        </form>

        {/* Quick Demo Fill Pill Buttons */}
        <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-center">
          <span className="text-[11px] text-slate-400 block mb-2">Quick Evaluation Logins:</span>
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              onClick={autofillAdmin}
              className="px-3 py-1.5 rounded-lg bg-agnexa-orange-500/20 text-agnexa-orange-400 border border-agnexa-orange-500/40 text-[11px] font-semibold hover:bg-agnexa-orange-500 hover:text-white transition-all"
            >
              Autofill Admin (admin@agnexa.com)
            </button>
            <button
              type="button"
              onClick={autofillClient}
              className="px-3 py-1.5 rounded-lg bg-agnexa-blue-500/20 text-agnexa-blue-400 border border-agnexa-blue-500/40 text-[11px] font-semibold hover:bg-agnexa-blue-500 hover:text-white transition-all"
            >
              Autofill Client
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-agnexa-orange-400 hover:underline font-semibold">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}
