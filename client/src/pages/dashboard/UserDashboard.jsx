import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Building, ShieldCheck, ArrowRight, Layers, FileText } from 'lucide-react';
import SEO from '../../components/common/SEO';

export default function UserDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="relative pt-24 pb-20">
      <SEO title="Client Portal" description="Manage your project consultations with Agnexa Technologies." />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-agnexa-blue-500/20 border border-agnexa-blue-500/40 text-agnexa-blue-400 font-extrabold text-2xl flex items-center justify-center">
              {user?.name?.[0] || 'U'}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agnexa-blue-400">Client Partner</span>
              <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
              <p className="text-xs text-slate-400">{user?.email} • {user?.company || 'Enterprise Partner'}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-rose-500/40 hover:text-rose-400 text-xs font-semibold text-slate-300 transition-all"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-agnexa-orange-500/20 text-agnexa-orange-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Start New Project Brief</h3>
            <p className="text-xs text-slate-300">Submit a new RFP for AI, cloud, web, or custom enterprise software.</p>
            <Link
              to="/contact"
              className="text-xs font-bold text-agnexa-blue-400 hover:text-white flex items-center space-x-1 pt-2"
            >
              <span>Submit Project RFP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-agnexa-blue-500/20 text-agnexa-blue-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Browse Solutions</h3>
            <p className="text-xs text-slate-300">Explore technical architecture specifications across our 9 practices.</p>
            <Link
              to="/services"
              className="text-xs font-bold text-agnexa-blue-400 hover:text-white flex items-center space-x-1 pt-2"
            >
              <span>Explore Stacks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Security & SLA Support</h3>
            <p className="text-xs text-slate-300">Direct escalation line with guaranteed 24-hour response turnaround.</p>
            <a
              href="mailto:enterprise@agnexa.com"
              className="text-xs font-bold text-emerald-400 hover:text-white flex items-center space-x-1 pt-2"
            >
              <span>Contact Solution Lead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
