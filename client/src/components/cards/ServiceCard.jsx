import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ServiceLogo from '../common/ServiceLogos';

export default function ServiceCard({ service, index = 0 }) {
  const isAccent = index % 3 === 1;

  return (
    <div className={`group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
      isAccent ? 'glass-card glass-card-orange' : 'glass-card'
    }`}>
      {/* Background radial highlight */}
      <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
        isAccent ? 'bg-agnexa-orange-500/20' : 'bg-agnexa-blue-500/20'
      }`} />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 p-2.5 rounded-2xl bg-white dark:bg-agnexa-navy-800 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
            <ServiceLogo slug={service.slug} icon={service.icon} className="w-8 h-8 object-contain" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-agnexa-blue-600 dark:group-hover:text-agnexa-blue-400 transition-colors leading-tight">
          {service.title}
        </h3>

        <p className="text-slate-700 dark:text-slate-300 text-sm mt-3 leading-relaxed font-normal">
          {service.tagline}
        </p>

        {/* Feature bullet highlights */}
        {service.features && service.features.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
            {service.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="text-xs text-slate-400 flex items-start space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isAccent ? 'bg-agnexa-orange-400' : 'bg-agnexa-blue-400'}`} />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {(service.techStack || []).slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
              {tech}
            </span>
          ))}
          {(service.techStack?.length || 0) > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
              +{service.techStack.length - 3}
            </span>
          )}
        </div>

        <Link
          to={`/services/${service.slug}`}
          className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
            isAccent
              ? 'border-agnexa-orange-500/40 text-agnexa-orange-400 group-hover:bg-agnexa-orange-500 group-hover:text-white'
              : 'border-agnexa-blue-500/40 text-agnexa-blue-400 group-hover:bg-agnexa-blue-500 group-hover:text-white'
          }`}
          aria-label={`View details for ${service.title}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
