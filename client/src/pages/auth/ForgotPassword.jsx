import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { authApi } from '../../services/api';
import SEO from '../../components/common/SEO';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ state: 'loading', message: '' });
    try {
      const res = await authApi.forgotPassword(email);
      setStatus({ 
        state: 'success', 
        message: res.data.message || 'Password reset instructions have been dispatched.' 
      });
    } catch (err) {
      setStatus({ 
        state: 'error', 
        message: err.response?.data?.message || 'Could not process request for this email.' 
      });
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-4">
      <SEO title="Forgot Password" description="Reset your password on Agnexa Technologies portal." />

      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
        <div className="text-center mb-8 space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-agnexa-orange-500/10 border border-agnexa-orange-500/30 text-agnexa-orange-400 p-2 mx-auto mb-3 flex items-center justify-center">
            <KeyRound className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white">Reset Your Password</h1>
          <p className="text-xs text-slate-400">Enter your registered email address to receive reset instructions.</p>
        </div>

        {status.state === 'success' ? (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs leading-relaxed flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
            <Link
              to="/reset-password"
              className="w-full py-3 rounded-xl bg-agnexa-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block"
            >
              Continue to Set New Password
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status.state === 'error' && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

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

            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue transition-all disabled:opacity-50"
            >
              {status.state === 'loading' ? 'Processing...' : 'Send Reset Link'}
            </button>
          </form>
        )}

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
