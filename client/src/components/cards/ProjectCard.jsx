import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function ProjectCard({ project, priority = false }) {
  return (
    <div className="group rounded-3xl overflow-hidden glass-card flex flex-col justify-between transition-all duration-300">
      {/* Project Image Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-agnexa-navy-900">
        <img 
          src={project.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80'} 
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agnexa-navy-950 via-agnexa-navy-950/40 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-agnexa-navy-950/80 backdrop-blur-md border border-white/20 text-agnexa-blue-300">
            {project.industry}
          </span>
        </div>

        {project.results && project.results.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-agnexa-navy-950/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-1.5 shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{project.results[0].metric}</span>
              <span className="text-slate-300 font-normal">{project.results[0].label}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-agnexa-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm mt-3 line-clamp-2 leading-relaxed">
            {project.solution}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {(project.technologies || []).slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/portfolio/${project.slug}`}
            className="text-xs font-bold text-agnexa-orange-400 hover:text-white flex items-center space-x-1 group/link"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
