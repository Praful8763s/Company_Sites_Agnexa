import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Layers, Cpu, ChevronRight } from 'lucide-react';
import { portfolioApi } from '../services/api';
import SEO from '../components/common/SEO';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await portfolioApi.getBySlug(slug);
        if (res.data.project) {
          setProject(res.data.project);
        } else {
          setError('Case study not found');
        }
      } catch (err) {
        console.warn('Error fetching portfolio item:', err);
        setError('Case study not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-36 pb-24 text-center text-slate-400">
        <div className="w-8 h-8 border-2 border-agnexa-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>Loading case study specifics...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Case Study Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested case study could not be located.</p>
        <Link
          to="/portfolio"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-agnexa-blue-500 text-white text-xs font-bold uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title={`${project.title} | Case Study`}
        description={project.challenge}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-agnexa-blue-400 font-medium">{project.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="inline-block px-3.5 py-1.5 rounded-full bg-agnexa-blue-500/10 border border-agnexa-blue-500/30 text-xs font-bold text-agnexa-blue-400 uppercase tracking-widest mb-4">
          {project.industry} Case Study
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
          {project.title}
        </h1>

        <div className="mt-8 rounded-3xl overflow-hidden h-80 sm:h-[420px] w-full relative border border-white/10 shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-agnexa-navy-950 via-transparent to-transparent" />
        </div>
      </section>

      {/* Metrics Banner */}
      {project.results && project.results.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="p-8 rounded-3xl glass-card border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {project.results.map((res, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-agnexa-blue-400 to-agnexa-orange-400">
                  {res.metric}
                </div>
                <div className="text-xs text-slate-300 font-semibold">{res.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenge & Solution Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-3xl glass-card space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">The Problem & Challenge</span>
              <h3 className="text-2xl font-bold text-white">Understanding the Technical Bottleneck</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-3xl glass-card border-l-4 border-l-agnexa-blue-500 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">The Agnexa Architecture</span>
              <h3 className="text-2xl font-bold text-white">How We Designed & Deployed the Solution</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="p-8 rounded-3xl glass-card space-y-4">
                <h4 className="text-lg font-bold text-white">Key Engineering Highlights</h4>
                <div className="space-y-2.5">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl glass-card space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Technologies Deployed</h4>
              <div className="flex flex-wrap gap-1.5">
                {(project.technologies || []).map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-agnexa-navy-800 text-xs font-mono text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400">Client Partner</span>
                <p className="text-sm font-bold text-white mt-0.5">{project.clientName || 'Enterprise Partner'}</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card space-y-3 bg-gradient-to-br from-agnexa-navy-900 to-agnexa-blue-950">
              <h4 className="text-base font-bold text-white">Have a similar technical challenge?</h4>
              <p className="text-xs text-slate-300">
                Discuss requirements with our software engineering leads.
              </p>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider text-center block shadow-neon-blue"
              >
                Start Project Brief
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
