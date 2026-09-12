import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, 
  Sparkles, Clock, ShieldCheck, ChevronDown, ExternalLink, Globe
} from 'lucide-react';
import { contactApi } from '../services/api';
import SEO from '../components/common/SEO';

const servicesList = [
  'Cloud Web Hosting',
  'Web Application Development',
  'Mobile App Solutions',
  'Web Designing',
  'Web Deployment',
  'Web Hosting',
  'Digital Product Design',
  'Logo Designing',
  'Data Related Solutions',
  'Excel Based Services'
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Flexible / Not Sure'
];

const timelines = [
  'Immediate (Less than 1 Month)',
  '1 to 3 Months',
  '3 to 6 Months',
  '6+ Months',
  'Flexible'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: servicesList[0],
    budget: budgetRanges[1],
    timeline: timelines[1],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.service) errs.service = 'Please select a service';
    if (!formData.message.trim()) {
      errs.message = 'Project message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters describing your project';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ state: 'loading', message: '' });
    try {
      const res = await contactApi.submit(formData);
      setStatus({ 
        state: 'success', 
        message: res.data.message || 'Enquiry successfully submitted! Our solution architect will respond within 24 hours.' 
      });
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: servicesList[0],
        budget: budgetRanges[1],
        timeline: timelines[1],
        message: ''
      });
      setErrors({});
    } catch (err) {
      setStatus({ 
        state: 'error', 
        message: err.response?.data?.message || 'Failed to submit enquiry. Please check your connection and try again.' 
      });
    }
  };

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Contact & Technical Consultation" 
        description="Initiate your enterprise technology project with Agnexa Technologies. Receive an architectural roadmap and feasibility assessment within 24 hours."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>Direct Senior Architect Access</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Let's Build Something <span className="text-gradient-brand">Exceptional</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Tell us about your business goals, target timelines, and technology requirements. Our engineering leadership will prepare a comprehensive preliminary architecture review.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office details & SLA trust badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl glass-card space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Direct Contacts</h3>
                <span className="px-2.5 py-1 rounded-full bg-agnexa-blue-500/10 border border-agnexa-blue-400/30 text-[11px] font-bold text-agnexa-blue-400">
                  Direct Line
                </span>
              </div>
              
              <div className="space-y-4 text-sm">
                {/* Founder Info */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agnexa-blue-500 to-agnexa-orange-500 text-white font-black flex items-center justify-center text-sm shadow-md">
                    PS
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-agnexa-orange-400 uppercase tracking-wider">Founder & CEO</div>
                    <div className="font-bold text-white text-base">Praful Sonwane</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-agnexa-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Office Address</div>
                    <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                      G 9 Agrawal Colony, Pithampur, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-agnexa-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Email Address</div>
                    <a href="mailto:prafulsonwane58@gmail.com" className="text-agnexa-blue-400 hover:underline text-xs mt-0.5 block font-medium">
                      prafulsonwane58@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Phone & WhatsApp</div>
                    <a href="tel:+919302433799" className="text-emerald-400 hover:underline text-xs mt-0.5 block font-medium">
                      +91 9302433799
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-agnexa-blue-400" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Mutual NDA executed prior to confidential disclosures</span>
                </div>
              </div>
            </div>

            {/* Map & Facility Card */}
            <div className="p-6 rounded-3xl glass-card relative overflow-hidden bg-agnexa-navy-900/60 border border-white/10 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Engineering Facility</span>
                <h4 className="text-base font-bold text-white">Pithampur Innovation Hub</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  G 9 Agrawal Colony, Pithampur. Rapid software delivery, cloud orchestration, and continuous architecture development.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Pithampur, MP, India</span>
                <span className="text-emerald-400 font-semibold">● Active Operations</span>
              </div>
            </div>

            {/* Strategic Partner Company Card */}
            <div className="p-6 rounded-3xl glass-card relative overflow-hidden bg-gradient-to-br from-agnexa-navy-900/90 to-agnexa-navy-850/90 border border-agnexa-blue-500/30 shadow-neon-blue">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-agnexa-orange-400">Strategic Partner Company</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                  Verified Partner
                </span>
              </div>
              
              <div className="flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-agnexa-navy-950 border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-md">
                  <Globe className="w-6 h-6 text-agnexa-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">Zsyio Technologies</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Agnexa Technologies is proud to be a partner company of <strong>Zsyio Technologies</strong>, co-engineering advanced digital capabilities and global software architectures.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Official Partner Website:</span>
                <a
                  href="https://zsyio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-agnexa-blue-500/20 hover:bg-agnexa-blue-500/30 text-agnexa-blue-300 hover:text-white border border-agnexa-blue-400/40 text-xs font-bold transition-all"
                >
                  <span>zsyio.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full Enterprise Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">Project Brief & Request For Proposal</h3>
              <p className="text-xs text-slate-300 mb-8">
                Please complete the form below. Mandatory fields are marked with an asterisk (*).
              </p>

              {status.state === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission Received!</div>
                    <div className="text-xs mt-1 text-slate-200">{status.message}</div>
                  </div>
                </div>
              )}

              {status.state === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start space-x-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission Failed</div>
                    <div className="text-xs mt-1 text-slate-200">{status.message}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-agnexa-blue-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Health Systems"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-agnexa-blue-400 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Corporate / Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.sharma@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-rose-500' : 'border-white/15 focus:border-agnexa-blue-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 54321"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-agnexa-blue-400 transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Primary Service Domain *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-agnexa-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                  >
                    {servicesList.map((srv, i) => (
                      <option key={i} value={srv} className="bg-agnexa-navy-900 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-agnexa-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                    >
                      {budgetRanges.map((b, i) => (
                        <option key={i} value={b} className="bg-agnexa-navy-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-agnexa-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-agnexa-blue-400"
                    >
                      {timelines.map((t, i) => (
                        <option key={i} value={t} className="bg-agnexa-navy-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Brief & Technical Scope *
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, existing architecture challenges, or specific milestones you wish to achieve..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                      errors.message ? 'border-rose-500' : 'border-white/15 focus:border-agnexa-blue-400'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-agnexa-blue-500 via-agnexa-blue-400 to-agnexa-orange-500 hover:from-agnexa-blue-600 hover:to-agnexa-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-neon-blue transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.state === 'loading' ? 'Transmitting Enquiry...' : 'Submit Technical Enquiry'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
