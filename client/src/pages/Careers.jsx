import React, { useState } from 'react';
import { 
  Briefcase, Sparkles, CheckCircle2, MapPin, Clock, ArrowRight, 
  X, Send, Heart, DollarSign, Laptop, Coffee, Award 
} from 'lucide-react';
import { careersApi } from '../services/api';
import SEO from '../components/common/SEO';

const openings = [
  {
    id: 'role-1',
    title: 'Senior Full-Stack Engineer (React / Node.js / Go)',
    department: 'Core Engineering',
    location: 'Bengaluru, India / Hybrid',
    type: 'Full-Time',
    experience: '5+ Years',
    desc: 'Lead architecture and development of scalable microservices, low-latency REST/GraphQL APIs, and high-performance React frontends for enterprise clients.'
  },
  {
    id: 'role-2',
    title: 'Generative AI & LLM Systems Specialist',
    department: 'Intelligent Systems',
    location: 'Bengaluru, India / Hybrid',
    type: 'Full-Time',
    experience: '3+ Years',
    desc: 'Engineer private enterprise RAG architectures, vector search chunking pipelines, model fine-tuning, and guardrail evaluation frameworks using Python and LangChain.'
  },
  {
    id: 'role-3',
    title: 'Principal Cloud & DevOps Architect',
    department: 'Infrastructure',
    location: 'Bengaluru, India / Remote',
    type: 'Full-Time',
    experience: '6+ Years',
    desc: 'Design zero-downtime multi-region Kubernetes clusters, automated GitOps CI/CD pipelines, and FinOps cost governance blueprints on AWS and GCP.'
  },
  {
    id: 'role-4',
    title: 'Senior Product Designer (UI/UX & Design Systems)',
    department: 'Design & Experience',
    location: 'Bengaluru, India / Hybrid',
    type: 'Full-Time',
    experience: '4+ Years',
    desc: 'Craft intuitive SaaS dashboards, high-fidelity micro-interactions, and scalable design token architectures for international digital products.'
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: '',
    resumeNotes: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleApply = (role) => {
    setSelectedRole(role);
    setStatus({ state: 'idle', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.experience) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: '' });
    try {
      const res = await careersApi.apply({
        ...form,
        role: selectedRole.title
      });
      setStatus({ state: 'success', message: res.data.message || 'Application submitted successfully!' });
      setForm({ fullName: '', email: '', phone: '', experience: '', portfolioUrl: '', resumeNotes: '' });
      setTimeout(() => {
        setSelectedRole(null);
      }, 2500);
    } catch (err) {
      setStatus({ 
        state: 'error', 
        message: err.response?.data?.message || 'Failed to submit application. Please try again.' 
      });
    }
  };

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Careers & Engineering Culture" 
        description="Join Agnexa Technologies engineering team in Bengaluru. Explore open roles in Full-Stack development, AI, Cloud architecture, and UI/UX."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-orange-400 mb-6">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Join Agnexa Technologies</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Build High-Impact Software With <span className="text-gradient-brand">Exceptional Engineers</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          At Agnexa, you won't be trapped in legacy maintenance or bureaucratic red tape. You will work on bleeding-edge technologies, build systems that matter, and learn alongside veteran architects.
        </p>
      </section>

      {/* Culture & Perks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl glass-card space-y-3">
            <DollarSign className="w-8 h-8 text-emerald-400" />
            <h4 className="text-base font-bold text-white">Competitive Compensation</h4>
            <p className="text-xs text-slate-300">Top-tier salary packages, performance bonuses, and continuous appraisal cycles.</p>
          </div>
          <div className="p-6 rounded-3xl glass-card glass-card-orange space-y-3">
            <Laptop className="w-8 h-8 text-agnexa-orange-400" />
            <h4 className="text-base font-bold text-white">High-End Hardware</h4>
            <p className="text-xs text-slate-300">M-series MacBook Pros, 4K monitors, and all cloud tooling credits provided.</p>
          </div>
          <div className="p-6 rounded-3xl glass-card space-y-3">
            <Award className="w-8 h-8 text-agnexa-blue-400" />
            <h4 className="text-base font-bold text-white">Continuous Upskilling</h4>
            <p className="text-xs text-slate-300">Generous conference allowances, AWS/GCP certification reimbursements, and weekly tech talks.</p>
          </div>
          <div className="p-6 rounded-3xl glass-card space-y-3">
            <Heart className="w-8 h-8 text-rose-400" />
            <h4 className="text-base font-bold text-white">Comprehensive Health</h4>
            <p className="text-xs text-slate-300">Premium health insurance covering yourself, spouse, children, and parents.</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Current Openings</span>
          <h2 className="text-3xl font-extrabold text-white">Find Your Next Role</h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {openings.map((role) => (
            <div 
              key={role.id}
              className="p-6 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-agnexa-blue-400 transition-all"
            >
              <div className="space-y-2 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-agnexa-orange-400">
                  {role.department}
                </span>
                <h3 className="text-lg font-bold text-white">{role.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{role.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-agnexa-blue-400" />
                    <span>{role.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-agnexa-blue-400" />
                    <span>{role.experience} Experience</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleApply(role)}
                className="px-6 py-3 rounded-xl bg-agnexa-blue-500 hover:bg-agnexa-blue-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 shadow-neon-blue transition-all"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-agnexa-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-agnexa-navy-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Job Application</span>
            <h3 className="text-xl font-bold text-white mt-1 leading-snug">{selectedRole.title}</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Rahul Deshmukh"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@mail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Years of Experience *</label>
                  <input
                    type="text"
                    required
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    placeholder="e.g. 4 Years"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">GitHub / LinkedIn URL</label>
                  <input
                    type="url"
                    value={form.portfolioUrl}
                    onChange={(e) => setForm({ ...form, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Brief Note / Skills Highlight</label>
                <textarea
                  rows="3"
                  value={form.resumeNotes}
                  onChange={(e) => setForm({ ...form, resumeNotes: e.target.value })}
                  placeholder="Tell us about complex projects you have engineered..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                />
              </div>

              {status.state === 'error' && (
                <div className="text-xs text-rose-400">{status.message}</div>
              )}
              {status.state === 'success' && (
                <div className="text-xs text-emerald-400 font-semibold">{status.message}</div>
              )}

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-neon-blue disabled:opacity-50"
              >
                {status.state === 'loading' ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
