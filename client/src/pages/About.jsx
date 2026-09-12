import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Sparkles, Target, Compass, Award, CheckCircle2, 
  ArrowRight, Users, Globe2, HeartHandshake, Cpu, Layers, ExternalLink 
} from 'lucide-react';
import SEO from '../components/common/SEO';

export default function About() {
  const values = [
    {
      title: 'Engineering Rigor Over Hacks',
      desc: 'We reject fragile shortcuts. Every database schema, API endpoint, and cloud module is architected to withstand heavy production concurrency.',
      icon: Cpu
    },
    {
      title: 'Radical Transparency',
      desc: 'Direct access to developer repositories, weekly burndown telemetry, and no hidden vendor margins. What you see is what we deploy.',
      icon: EyeIcon
    },
    {
      title: 'Uncompromised IP Security',
      desc: 'You retain 100% intellectual property ownership from day one. NDA protection, SOC2-aligned environments, and strict data confidentiality.',
      icon: ShieldCheck
    },
    {
      title: 'Outcome-Driven Partnerships',
      desc: 'We do not bill aimless hours. We deliver measurable business metrics—faster page hydration, lower cloud costs, and automated operational efficiency.',
      icon: Target
    }
  ];

  function EyeIcon(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    );
  }

  const milestones = [
    { year: 'Phase 1', title: 'Foundation & Core Engineering', desc: 'Established in Bengaluru with a core team of senior distributed systems and cloud architects.' },
    { year: 'Phase 2', title: 'Multi-Cloud & Enterprise Scale', desc: 'Expanded delivery across North American and European enterprises, delivering mission-critical SaaS platforms.' },
    { year: 'Phase 3', title: 'AI & Intelligent Systems Hub', desc: 'Inaugurated dedicated Generative AI and RAG engineering practice, deploying private enterprise LLM workflows.' },
    { year: 'Today', title: 'Ideas to Impact Globally', desc: 'Serving 45+ enterprise partners with 150+ successful production releases and 99.98% architecture reliability.' }
  ];

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="About Us" 
        description="Learn about Agnexa Technologies — Indian technology expertise with a global outlook, delivering custom software, AI, and cloud architectures."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center relative">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>About Agnexa Technologies</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Turning Complex Engineering Into <span className="text-gradient-brand">Competitive Advantage</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Agnexa Technologies is a modern Indian IT and software engineering enterprise. We empower ambitious startups, scaling SMEs, and global enterprises with world-class software, artificial intelligence, and cloud architectures.
        </p>
      </section>

      {/* Brand Identity & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-agnexa-navy-850 to-agnexa-navy-950 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 p-3 mb-6 shadow-neon-blue">
                <img src="/logo.png" alt="Agnexa Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Agnexa Technologies</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-agnexa-orange-400 font-semibold mb-6">Ideas to Impact</p>
              
              <blockquote className="text-slate-300 text-sm italic border-l-2 border-agnexa-blue-400 pl-4 my-6">
                "Our name represents the inner spark ('Agni') of bold innovation fused with execution excellence ('Nexus'). We don't write code merely to satisfy contracts; we build scalable digital assets that propel businesses into their next era."
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-slate-400">Headquarters</span>
                  <p className="text-white font-semibold mt-0.5">G 9 Agrawal Colony, Pithampur, India</p>
                </div>
                <div>
                  <span className="text-slate-400">Founder & CEO</span>
                  <p className="text-white font-semibold mt-0.5">Praful Sonwane</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Our Mission & Purpose</span>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                Democratizing Enterprise-Grade Technology For Growth Companies
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                In today's fast-evolving landscape, staying competitive requires more than off-the-shelf templates. It demands custom platforms engineered to scale seamlessly under load, intelligent systems capable of automating multi-step workflows, and defensive security postures that earn customer trust.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Agnexa combines the deep technical aptitude and work ethic of India’s premier engineering talent with modern Agile governance, giving our international clients a decisive speed and quality edge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card">
                <div className="text-2xl font-black text-agnexa-blue-400">100%</div>
                <div className="text-xs font-bold text-white mt-1">IP Rights Transferred</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Clean contracts and complete source code repository handover.</div>
              </div>
              <div className="p-4 rounded-xl glass-card glass-card-orange">
                <div className="text-2xl font-black text-agnexa-orange-400">2-Week</div>
                <div className="text-xs font-bold text-white mt-1">Sprint Releases</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Continuous delivery of functional, tested code with demo sessions.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="p-8 sm:p-12 rounded-3xl glass-card bg-gradient-to-r from-agnexa-navy-950 via-agnexa-navy-900 to-agnexa-navy-950 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-agnexa-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-agnexa-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Avatar & Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-agnexa-blue-500 via-indigo-600 to-agnexa-orange-500 p-1 shadow-neon-blue">
                <div className="w-full h-full rounded-[22px] bg-agnexa-navy-950 flex flex-col items-center justify-center text-white">
                  <span className="text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-agnexa-blue-400 to-agnexa-orange-400">PS</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">Founder</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Praful Sonwane</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-agnexa-orange-400 mt-0.5">
                  Founder & CEO, Agnexa Technologies
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center space-x-1">
                  <span>G 9 Agrawal Colony, Pithampur, India</span>
                </p>
              </div>
            </div>

            {/* Founder Vision & Direct Contacts */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400">
                <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
                <span>Founder's Directive</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                "Our commitment is to turn visionary ideas into reliable, scalable digital impact."
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded by <strong>Praful Sonwane</strong>, Agnexa Technologies is rooted in core architectural craftsmanship. From our base in Pithampur to global partnerships, we ensure every product we build is designed for 99.99% reliability, uncompromised speed, and transparent client trust.
              </p>

              {/* Direct Founder Contact Pills */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <a 
                  href="mailto:prafulsonwane58@gmail.com" 
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all flex items-center space-x-2"
                >
                  <span className="text-agnexa-blue-400">Email:</span>
                  <span>prafulsonwane58@gmail.com</span>
                </a>
                <a 
                  href="tel:+919302433799" 
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all flex items-center space-x-2"
                >
                  <span className="text-emerald-400">Call / WhatsApp:</span>
                  <span>+91 9302433799</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Our Core Principles</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The Values That Anchor Every Line of Code
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl glass-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-agnexa-blue-500/10 border border-agnexa-blue-500/30 text-agnexa-blue-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Journey / Evolution */}
      <section className="bg-agnexa-navy-900/40 border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Our Progression</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Path From Inception To Global Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card space-y-2 border-t-2 border-t-agnexa-blue-500">
                <span className="text-xs font-bold text-agnexa-orange-400 uppercase tracking-widest">{m.year}</span>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance & Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="p-8 sm:p-10 rounded-3xl glass-card flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-agnexa-blue-500">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Strategic Technology Alliance</span>
            <h3 className="text-2xl font-bold text-white">Partner Company of Zsyio Technologies</h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Agnexa Technologies collaborates with <strong>Zsyio Technologies</strong> to deliver end-to-end enterprise architectures, distributed cloud deployments, and resilient engineering ecosystems worldwide.
            </p>
          </div>
          <a
            href="https://zsyio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs tracking-wider transition-all shadow-md shrink-0 group hover:border-agnexa-blue-400"
          >
            <span>Visit zsyio.com</span>
            <ExternalLink className="w-4 h-4 text-agnexa-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <div className="p-10 rounded-3xl glass-card space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a dependable technology partner?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Discuss your upcoming roadmap with our engineering leadership and discover how Agnexa can accelerate your digital vision.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-neon-blue hover:scale-105 transition-all"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
