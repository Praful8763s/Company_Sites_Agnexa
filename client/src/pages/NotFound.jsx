import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4">
      <SEO title="Page Not Found" description="The requested page could not be located on Agnexa Technologies." />
      
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-agnexa-blue-400 to-agnexa-orange-400">
          404
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          System Endpoint Not Found
        </h1>
        
        <p className="text-slate-300 text-sm leading-relaxed">
          The route you navigated to has been migrated, decommissioned, or does not exist in our system registry.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
