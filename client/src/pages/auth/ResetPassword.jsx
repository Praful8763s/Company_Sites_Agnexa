import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { authApi } from '../../services/api';
import SEO from '../../components/common/SEO';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !newPassword) return;

    if (newPassword !== confirmPassword) {
      setStatus({ state: 'error', message: 'Passwords do not match.' });
      return;
    }

    if (newPassword.length < 6) {
      setStatus({ state: 'error', message: 'Password must be at least 6 characters.' });
      return;
    }

    setStatus({ state: 'loading', message: '' });
    try {
      const res = await authApi.resetPassword({ email, newPassword });
      setStatus({ 
        state: 'success', 
        message: res.data.message || 'Password successfully updated! Redirecting to login...' 
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setStatus({ 
        state: 'error', 
        message: err.response?.data?.message || 'Password update failed. Please verify your email.' 
      });
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-4">
      <SEO title="Set New Password" description="Create a new password for your Agnexa account." />

      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-2xl font-bold text-white">Create New Password</h1>
          <p className="text-xs text-slate-400">Enter your email address and new password below.</p>
        </div>

        {status.state === 'success' && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {status.state === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Registered Email</label>
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
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">New Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Confirm New Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status.state === 'loading'}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue transition-all disabled:opacity-50"
          >
            {status.state === 'loading' ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-xs text-slate-400 hover:text-white inline-flex items-center space-x-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
