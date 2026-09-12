import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ChevronRight, Sparkles, Code2, Globe, Smartphone, 
  Cloud, BarChart3, ShieldCheck, Palette, Compass, ArrowUpRight, LogIn, LayoutDashboard, LogOut,
  FileSpreadsheet
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const servicesList = [
  {
    title: 'Cloud Web Hosting',
    slug: 'cloud-web-hosting',
    icon: Cloud,
    tagline: 'High-performance AWS-powered hosting with 99.9% uptime'
  },
  {
    title: 'Web Application Development',
    slug: 'web-application-development',
    icon: Globe,
    tagline: 'Full-stack custom web solutions built for scale'
  },
  {
    title: 'Mobile App Solutions',
    slug: 'mobile-app-solutions',
    icon: Smartphone,
    tagline: 'Native-caliber mobile experiences for iOS and Android'
  },
  {
    title: 'Web Designing',
    slug: 'web-designing',
    icon: Palette,
    tagline: 'Beautiful, user-centric designs that captivate audiences'
  },
  {
    title: 'Web Deployment',
    slug: 'web-deployment',
    icon: Code2,
    tagline: 'Seamless deployment solutions ensuring 100% online availability'
  },
  {
    title: 'Web Hosting',
    slug: 'web-hosting',
    icon: Cloud,
    tagline: 'Reliable, fast, and secure hosting solutions'
  },
  {
    title: 'Digital Product Design',
    slug: 'digital-product-design',
    icon: Compass,
    tagline: 'User-centric UI/UX design connecting intuition to function'
  },
  {
    title: 'Logo Designing',
    slug: 'logo-designing',
    icon: Sparkles,
    tagline: 'Unique brand identities that make your business stand out'
  },
  {
    title: 'Data Related Solutions',
    slug: 'data-related-solutions',
    icon: BarChart3,
    tagline: 'Advanced analytics and data management for informed decisions'
  },
  {
    title: 'Excel Based Services',
    slug: 'excel-based-services',
    icon: FileSpreadsheet,
    tagline: 'VBA macros, automated reporting, and advanced spreadsheet modeling'
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Insights', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-agnexa-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 flex items-center justify-center transition-transform group-hover:scale-105 shadow-neon-blue">
              <img 
                src="/logo.png" 
                alt="Agnexa Technologies" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white font-sans flex items-center">
                AGNEX<span className="text-agnexa-orange-500">A</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 font-medium uppercase -mt-1 group-hover:text-agnexa-blue-400 transition-colors">
                Ideas to Impact
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/about' 
                  ? 'text-agnexa-blue-400 bg-white/5' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center space-x-1 transition-colors ${
                  location.pathname.startsWith('/services') 
                    ? 'text-agnexa-blue-400 bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-agnexa-blue-400' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown */}
              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] bg-agnexa-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="col-span-3 pb-3 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-agnexa-blue-400 font-semibold">Specialized IT Capabilities</h4>
                      <p className="text-xs text-slate-400 mt-0.5">End-to-end engineering, cloud modernization, and artificial intelligence</p>
                    </div>
                    <Link 
                      to="/services" 
                      className="text-xs font-semibold text-agnexa-orange-400 hover:text-agnexa-orange-300 flex items-center space-x-1 group"
                    >
                      <span>Explore All Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {servicesList.map((srv) => {
                    const Icon = srv.icon;
                    return (
                      <Link
                        key={srv.slug}
                        to={`/services/${srv.slug}`}
                        className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group flex items-start space-x-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-agnexa-navy-800 border border-white/10 flex items-center justify-center text-agnexa-blue-400 group-hover:text-white group-hover:bg-agnexa-blue-500 transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-agnexa-blue-400 transition-colors leading-tight">
                            {srv.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 line-clamp-1 leading-snug">
                            {srv.tagline}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {navLinks.filter(l => l.name !== 'About').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path 
                    ? 'text-agnexa-blue-400 bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-2">
                {isAdmin ? (
                  <Link
                    to="/admin"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-agnexa-orange-500/20 text-agnexa-orange-400 border border-agnexa-orange-500/40 hover:bg-agnexa-orange-500 hover:text-white transition-all flex items-center space-x-1.5"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Admin Panel</span>
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-agnexa-blue-500/20 text-agnexa-blue-400 border border-agnexa-blue-500/40 hover:bg-agnexa-blue-500 hover:text-white transition-all flex items-center space-x-1.5"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </Link>
                )}
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Client Login</span>
              </Link>
            )}

            <Link
              to="/contact"
              className="relative group overflow-hidden rounded-xl px-5 py-2.5 bg-gradient-to-r from-agnexa-blue-500 to-agnexa-blue-400 text-white text-xs uppercase tracking-wider font-bold shadow-neon-blue hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>Start a Project</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-agnexa-orange-500 to-agnexa-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg bg-agnexa-blue-500 text-white text-xs font-bold"
            >
              Start
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-agnexa-navy-950/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-8 space-y-3 animate-in slide-in-from-top duration-200">
          <Link
            to="/about"
            className="block py-2 text-base font-medium text-slate-200 hover:text-agnexa-blue-400"
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-agnexa-blue-400"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-agnexa-blue-400' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 border-l border-white/10 mt-1">
                {servicesList.map((srv) => (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    className="block py-1.5 text-sm text-slate-300 hover:text-agnexa-blue-400"
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.filter(l => l.name !== 'About').map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 text-base font-medium text-slate-200 hover:text-agnexa-blue-400"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            {user ? (
              <>
                <Link
                  to={isAdmin ? "/admin" : "/dashboard"}
                  className="w-full py-2.5 rounded-xl bg-agnexa-navy-800 text-center text-sm font-semibold text-white border border-white/10"
                >
                  {isAdmin ? 'Admin Console' : 'My Dashboard'}
                </Link>
                <button
                  onClick={logout}
                  className="w-full py-2.5 rounded-xl bg-red-500/20 text-red-400 text-center text-sm font-semibold"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-sm font-semibold text-white"
              >
                Sign In to Client Portal
              </Link>
            )}
            <Link
              to="/contact"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-center text-sm font-bold text-white shadow-neon-blue"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
