import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, 
  Sparkles, Layers, Terminal, ChevronRight, HelpCircle 
} from 'lucide-react';
import { servicesApi, portfolioApi } from '../services/api';
import ProjectCard from '../components/cards/ProjectCard';
import SEO from '../components/common/SEO';
import ServiceLogo from '../components/common/ServiceLogos';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await servicesApi.getBySlug(slug);
        if (res.data.service) {
          setService(res.data.service);
        } else {
          setError('Service not found');
        }

        // Fetch related portfolio items
        const portRes = await portfolioApi.getAll();
        if (portRes.data.portfolio) {
          setRelatedProjects(portRes.data.portfolio.slice(0, 2));
        }
      } catch (err) {
        console.warn('Error fetching service detail:', err);
        setError('Service not found or error loading data.');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-36 pb-24 text-center text-slate-400">
        <div className="w-8 h-8 border-2 border-agnexa-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>Loading architectural service specifications...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Service Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested service detail page could not be located.</p>
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-agnexa-blue-500 text-white text-xs font-bold uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title={`${service.title} Solutions`}
        description={`${service.tagline} Discover Agnexa Technologies enterprise engineering process, features, benefits, and tech stack.`}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-agnexa-blue-400 font-medium">{service.title}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 p-2.5 rounded-2xl bg-white dark:bg-agnexa-navy-800 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg">
                <ServiceLogo slug={service.slug} icon={service.icon} className="w-9 h-9 object-contain" />
              </div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-agnexa-blue-500/10 border border-agnexa-blue-500/30 text-xs font-bold text-agnexa-blue-600 dark:text-agnexa-blue-400 uppercase tracking-widest">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
              {service.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#solution"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
              >
                View Architecture Blueprint
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl glass-card space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {(service.techStack || []).map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-agnexa-navy-800 border border-white/10 text-xs font-mono text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400">Engagement Models</span>
                <div className="text-sm font-bold text-white mt-1">Dedicated Pod or Architecture Sprints</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS PROBLEM & THE AGNEXA SOLUTION */}
      <section id="solution" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-4">
            <div className="flex items-center space-x-2.5 text-rose-400 font-bold text-xs uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              <span>The Core Challenge</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Why Conventional Solutions Fall Short</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-agnexa-blue-500/10 border border-agnexa-blue-500/30 space-y-4">
            <div className="flex items-center space-x-2.5 text-agnexa-blue-400 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>The Agnexa Solution</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Engineered For Production Resilience</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.solution}
            </p>
          </div>

        </div>
      </section>

      {/* 3. KEY FEATURES & CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Technical Scope</span>
          <h2 className="text-3xl font-extrabold text-white">Key Capabilities & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(service.features || []).map((feature, i) => (
            <div key={i} className="p-5 rounded-2xl glass-card flex items-start space-x-3.5">
              <CheckCircle2 className="w-5 h-5 text-agnexa-blue-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 text-sm font-medium leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS ROADMAP */}
      {service.process && service.process.length > 0 && (
        <section className="bg-agnexa-navy-900/40 border-y border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Systematic Execution</span>
              <h2 className="text-3xl font-extrabold text-white">Our Engineering Process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div key={idx} className="p-6 rounded-3xl glass-card space-y-3">
                  <span className="text-2xl font-black text-agnexa-orange-400 font-mono">{step.step}</span>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. MEASURABLE BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Business Value</span>
          <h2 className="text-3xl font-extrabold text-white">Measurable Organizational Impact</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(service.benefits || []).map((benefit, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RELATED CASE STUDIES */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Related Case Studies</h3>
            <Link to="/portfolio" className="text-xs font-bold text-agnexa-blue-400 hover:text-white flex items-center space-x-1">
              <span>View full portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map(proj => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      )}

      {/* 7. BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="p-10 rounded-3xl glass-card bg-gradient-to-r from-agnexa-navy-900 to-agnexa-blue-950 border border-agnexa-blue-500/30 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Implement {service.title}?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our enterprise architects will review your current specifications and prepare a milestone blueprint within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-neon-blue hover:scale-105 transition-all"
            >
              <span>Consult With Our Practice Lead</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
