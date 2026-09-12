import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, Activity, ShoppingBag, Truck, GraduationCap, 
  Factory, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, 
  ShieldAlert, Layers, BarChart3, ChevronRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { fallbackIndustries } from '../data/fallbackData';
import { industriesApi } from '../services/api';

const iconMap = {
  Building2,
  Activity,
  ShoppingBag,
  Truck,
  GraduationCap,
  Factory
};

export default function Industries() {
  const location = useLocation();
  const [industries, setIndustries] = useState(fallbackIndustries);
  const [activeHash, setActiveHash] = useState(location.hash || '#fintech');

  // Load from API or fallback
  useEffect(() => {
    let isMounted = true;
    industriesApi.getAll()
      .then(res => {
        if (isMounted && res?.data?.industries?.length > 0) {
          setIndustries(res.data.industries);
        }
      })
      .catch(() => {
        // Fallback already pre-set
      });
    return () => { isMounted = false; };
  }, []);

  // Smooth scroll to anchor on mount or hash change
  useEffect(() => {
    const currentHash = location.hash;
    if (currentHash) {
      setActiveHash(currentHash);
      const targetElement = document.querySelector(currentHash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const quickNav = [
    { label: 'FinTech & Banking', hash: '#fintech', icon: Building2 },
    { label: 'Healthcare & MedTech', hash: '#healthcare', icon: Activity },
    { label: 'E-Commerce & Retail', hash: '#ecommerce', icon: ShoppingBag },
    { label: 'Logistics & Supply Chain', hash: '#logistics', icon: Truck },
    { label: 'EdTech Platforms', hash: '#edtech', icon: GraduationCap },
    { label: 'Industry 4.0 & Smart IoT', hash: '#manufacturing', icon: Factory },
  ];

  return (
    <div className="relative pt-24 pb-20 bg-slate-50 dark:bg-transparent min-h-screen">
      <SEO 
        title="Industry Solutions | FinTech, Healthcare, E-Commerce, Logistics, EdTech, IoT" 
        description="Specialized enterprise IT and software engineering solutions purpose-built for FinTech & Banking, Healthcare, E-Commerce, Logistics, EdTech, and Smart IoT."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-agnexa-blue-500/10 dark:bg-white/5 border border-agnexa-blue-500/20 dark:border-white/10 text-xs font-semibold text-agnexa-blue-600 dark:text-agnexa-orange-400 mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Domain-Specific Enterprise Technology Solutions</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Engineered For The World's <br className="hidden sm:inline" />
          <span className="text-gradient-brand">Most Demanding Industries</span>
        </h1>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-5 leading-relaxed font-medium">
          Every industry has unique security frameworks, compliance mandates, and transaction throughput dynamics. Agnexa deploys battle-tested domain architectures to solve mission-critical operational challenges.
        </p>
      </section>

      {/* Sticky Industry Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white/90 dark:bg-agnexa-navy-950/90 backdrop-blur-md border-y border-slate-200 dark:border-white/10 py-3.5 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0 mr-2 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Jump To:</span>
            </span>
            {quickNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeHash === item.hash;
              return (
                <a
                  key={item.hash}
                  href={item.hash}
                  onClick={() => setActiveHash(item.hash)}
                  className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-agnexa-blue-600 text-white shadow-md shadow-agnexa-blue-500/20 scale-105' 
                      : 'bg-slate-100 dark:bg-agnexa-navy-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-agnexa-blue-500'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {industries.map((ind) => {
          const Icon = (typeof ind.icon === 'string' ? iconMap[ind.icon] : ind.icon) || Building2;
          const cardId = ind.id || ind.slug;

          return (
            <div 
              key={cardId} 
              id={cardId}
              className="scroll-mt-36 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-agnexa-navy-900/80 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-agnexa-blue-500/40"
            >
              {/* Background Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-agnexa-blue-500/5 dark:bg-agnexa-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                
                {/* Left Column: Domain Identification, Challenges, Tech Stack */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-agnexa-blue-500/10 dark:bg-agnexa-blue-500/20 text-agnexa-blue-600 dark:text-agnexa-blue-400 flex items-center justify-center border border-agnexa-blue-500/20 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-agnexa-orange-600 dark:text-agnexa-orange-400">
                        Vertical Practice
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-agnexa-blue-600 dark:text-agnexa-blue-400 leading-snug">
                    {ind.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {ind.description || ind.challenges}
                  </p>

                  {/* Industry Challenge Box */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Operational Challenge</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {ind.challenges}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  {ind.technologies && ind.technologies.length > 0 && (
                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2.5">
                        Domain Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.technologies.map((t, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-agnexa-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Solutions, Metrics, Case Study Linking */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-agnexa-blue-600 dark:text-agnexa-blue-400 block mb-3">
                      Agnexa Engineering Solutions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ind.solutions?.map((sol, i) => (
                        <div 
                          key={i} 
                          className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-start space-x-3 transition-colors hover:border-slate-300 dark:hover:border-white/10"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                            {sol}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantifiable Benchmark Metrics */}
                  {ind.metrics && ind.metrics.length > 0 && (
                    <div className="pt-2">
                      <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        <BarChart3 className="w-3.5 h-3.5 text-agnexa-orange-500" />
                        <span>Proven Performance Benchmarks</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {ind.metrics.map((m, idx) => (
                          <div 
                            key={idx} 
                            className="p-3.5 rounded-2xl bg-slate-100 dark:bg-agnexa-navy-950/80 border border-slate-200 dark:border-white/10 text-center"
                          >
                            <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                              {m.metric}
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1 leading-snug">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions & Related Case Study */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {ind.relatedCaseStudy ? (
                      <Link
                        to={`/portfolio/${ind.relatedCaseStudy}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-agnexa-blue-600 dark:text-agnexa-blue-400 hover:text-agnexa-blue-700 dark:hover:text-agnexa-blue-300 group"
                      >
                        <span>Case Study: {ind.caseStudyTitle || 'Explore Live Project'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ) : (
                      <div />
                    )}

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-agnexa-orange-500 text-white hover:bg-agnexa-orange-600 text-xs font-bold shadow-sm transition-transform active:scale-95 group"
                    >
                      <span>Consult with our {ind.name.split('&')[0].trim()} practice</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Global Consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-agnexa-navy-900 border border-slate-200 dark:border-white/10 shadow-xl space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-600 dark:text-agnexa-orange-400">
            Cross-Domain Engineering
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Don't see your specific enterprise vertical listed?
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Our architectural blueprints—such as event-driven streaming, zero-trust cryptographic vaults, and real-time inference—are domain-agnostic and adapt seamlessly to specialized business models.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-600 to-agnexa-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Custom Vertical Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
