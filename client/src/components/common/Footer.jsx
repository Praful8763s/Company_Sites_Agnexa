import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, 
  Linkedin, Twitter, Github, Instagram, ArrowUpRight 
} from 'lucide-react';
import { newsletterApi } from '../../services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ state: 'loading', message: '' });
    try {
      const res = await newsletterApi.subscribe(email);
      setStatus({ state: 'success', message: res.data.message || 'Subscribed successfully!' });
      setEmail('');
    } catch (err) {
      setStatus({ 
        state: 'error', 
        message: err.response?.data?.message || 'Subscription failed. Please check your email.' 
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-agnexa-navy-950 border-t border-slate-200 dark:border-white/10 relative overflow-hidden text-slate-600 dark:text-slate-400 text-sm transition-colors">
      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-agnexa-blue-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-agnexa-orange-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter & Hook Bar */}
        <div className="p-8 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-agnexa-navy-900 dark:via-agnexa-navy-850 dark:to-agnexa-navy-900 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-600 dark:text-agnexa-orange-400">Engineering Intelligence</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Subscribe to the Agnexa Tech Dispatch
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 font-medium">
              Weekly deep-dives on Generative AI architectures, high-scale cloud migrations, and modern full-stack development. No spam, ever.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate or personal email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-500 focus:ring-1 focus:ring-agnexa-blue-500 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 hover:from-agnexa-blue-600 hover:to-agnexa-orange-600 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2 shrink-0 disabled:opacity-50"
              >
                <span>{status.state === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {status.state === 'success' && (
              <div className="mt-2.5 flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{status.message}</span>
              </div>
            )}
            {status.state === 'error' && (
              <div className="mt-2.5 flex items-center space-x-1.5 text-xs text-rose-600 dark:text-rose-400 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center shadow-sm dark:shadow-neon-blue">
                <img src="/logo.png" alt="Agnexa Technologies" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-wider text-slate-900 dark:text-white">
                  AGNEX<span className="text-agnexa-orange-500">A</span>
                </span>
                <span className="text-[10px] tracking-[0.28em] text-slate-500 dark:text-slate-400 font-semibold uppercase -mt-1">
                  Ideas to Impact
                </span>
              </div>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Agnexa Technologies is a modern Indian technology enterprise delivering custom software, AI, cloud, web, mobile, data, and cybersecurity solutions to forward-thinking businesses worldwide.
            </p>

            <div className="pt-1">
              <span className="text-xs font-semibold text-agnexa-orange-600 dark:text-agnexa-orange-400">Founder & CEO:</span>
              <p className="text-slate-900 dark:text-white font-bold text-sm">Praful Sonwane</p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-agnexa-orange-500 shrink-0 mt-0.5" />
                <span>G 9 Agrawal Colony, Pithampur, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-agnexa-blue-600 dark:text-agnexa-blue-400 shrink-0" />
                <a href="tel:+919302433799" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">+91 9302433799</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-agnexa-blue-600 dark:text-agnexa-blue-400 shrink-0" />
                <a href="mailto:prafulsonwane58@gmail.com" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">prafulsonwane58@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-agnexa-blue-600 dark:hover:text-agnexa-blue-400 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-agnexa-blue-600 dark:hover:text-agnexa-blue-400 flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-agnexa-orange-600 dark:hover:text-agnexa-orange-400 flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: IT Services */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider text-agnexa-blue-600 dark:text-agnexa-blue-400">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/services/cloud-web-hosting" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Cloud Web Hosting</Link></li>
              <li><Link to="/services/web-application-development" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Web Application Development</Link></li>
              <li><Link to="/services/mobile-app-solutions" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Mobile App Solutions</Link></li>
              <li><Link to="/services/web-designing" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Web Designing</Link></li>
              <li><Link to="/services/web-deployment" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Web Deployment</Link></li>
              <li><Link to="/services/web-hosting" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Web Hosting</Link></li>
              <li><Link to="/services/digital-product-design" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Digital Product Design</Link></li>
              <li><Link to="/services/logo-designing" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Logo Designing</Link></li>
              <li><Link to="/services/data-related-solutions" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Data Related Solutions</Link></li>
              <li><Link to="/services/excel-based-services" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Excel Based Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries & Solutions */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider text-agnexa-orange-600 dark:text-agnexa-orange-400">
              Industries
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/industries#fintech" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">FinTech & Banking</Link></li>
              <li><Link to="/industries#healthcare" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">Healthcare & MedTech</Link></li>
              <li><Link to="/industries#ecommerce" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">E-Commerce & Retail</Link></li>
              <li><Link to="/industries#logistics" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/industries#edtech" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">EdTech Platforms</Link></li>
              <li><Link to="/industries#manufacturing" className="hover:text-agnexa-orange-600 dark:hover:text-white transition-colors">Industry 4.0 & Smart IoT</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/about" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">About Agnexa</Link></li>
              <li><Link to="/portfolio" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Portfolio & Case Studies</Link></li>
              <li><Link to="/technologies" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Technology Stacks</Link></li>
              <li><Link to="/careers" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Careers & Openings</Link></li>
              <li><Link to="/blog" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Engineering Blog</Link></li>
              <li><Link to="/contact" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div>
              © 2026 <span className="text-slate-900 dark:text-white font-semibold">Agnexa Technologies</span>. All rights reserved.
            </div>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support & Inquiries</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
