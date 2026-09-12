import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Zap, Server, Code2, 
  Layers, CheckCircle2, ChevronRight, HelpCircle, ChevronDown, 
  Terminal, Globe2, Cpu, Database, Award, Users, RefreshCw, Cloud, Search, X
} from 'lucide-react';
import { servicesApi, portfolioApi, blogApi } from '../services/api';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import BlogCard from '../components/cards/BlogCard';
import Hero3DCanvas from '../components/ui/Hero3DCanvas';
import { TechLogo } from '../components/icons/TechLogos';
import { fallbackBlogs } from '../data/fallbackData';
import SEO from '../components/common/SEO';

export default function Home() {
  const [services, setServices] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [activeTechTab, setActiveTechTab] = useState('frontend');
  const [techSearchQuery, setTechSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [srvRes, prjRes, blgRes] = await Promise.all([
          servicesApi.getAll(),
          portfolioApi.getAll(),
          blogApi.getAll()
        ]);
        if (srvRes.data.services) setServices(srvRes.data.services);
        if (prjRes.data.portfolio) setFeaturedProjects(prjRes.data.portfolio.slice(0, 3));
        if (blgRes.data.blogs) setLatestBlogs(blgRes.data.blogs.slice(0, 3));
      } catch (err) {
        console.warn('API data fetch error, rendering with fallback data:', err);
      }
    };
    fetchData();
  }, []);

  const stats = [
    { value: '150+', label: 'Delivered Enterprise Projects', sub: 'Across 12+ industry sectors' },
    { value: '99.98%', label: 'Production System Reliability', sub: 'SLA backed cloud architectures' },
    { value: '45+', label: 'Global Client Partnerships', sub: 'India, North America, Europe & UAE' },
    { value: '< 24h', label: 'Initial Solution Architecture', sub: 'Rapid turnaround for qualified RFPs' },
  ];

  const techCategories = {
    'frontend': {
      title: 'Frontend',
      items: [
        { name: 'React.js', role: 'Reactive Component Architecture' },
        { name: 'Next.js', role: 'Enterprise Server-Side Rendering' },
        { name: 'Vue.js', role: 'Progressive Web Framework' },
        { name: 'Angular', role: 'Robust Single-Page Client Solutions' },
      ]
    },
    'backend': {
      title: 'Backend',
      items: [
        { name: 'Django Framework', role: 'High-Level Python Web Framework' },
        { name: 'Node.js Environment', role: 'Event-Driven Scalable Runtime' },
        { name: 'Express.js', role: 'Fast & Secure REST Microservices' },
        { name: 'Python', role: 'Enterprise Scripting & Automation' },
      ]
    },
    'databases': {
      title: 'Databases',
      items: [
        { name: 'MongoDB Atlas', role: 'Managed Document Cloud Datastore' },
        { name: 'PostgreSQL relational', role: 'ACID-Compliant Relational Database' },
        { name: 'MySQL', role: 'Proven Relational Database Management' },
        { name: 'Redis', role: 'High-Speed In-Memory Cache & Store' },
      ]
    },
    'cloud': {
      title: 'Cloud Solutions',
      items: [
        { name: 'Amazon Web Services', role: 'Elastic Compute & Cloud Infrastructure' },
        { name: 'Azure', role: 'Microsoft Enterprise Cloud Platform' },
        { name: 'Google Cloud', role: 'Scalable BigQuery & GCP Computing' },
        { name: 'Digital Ocean', role: 'Developer Cloud Infrastructure' },
      ]
    },
    'devops': {
      title: 'DevOps',
      items: [
        { name: 'Docker Containerization', role: 'Isolated & Standardized Deployments' },
      ]
    }
  };

  const processSteps = [
    { num: '01', title: 'Technical Discovery', desc: 'Deep dive into business requirements, existing architectures, scalability targets, and risk factors.' },
    { num: '02', title: 'System Architecture & Blueprint', desc: 'Design of microservices, database schemas, security perimeters, and modular UI component tokens.' },
    { num: '03', title: 'Iterative Sprint Engineering', desc: 'Bi-weekly deployable sprints with automated testing, CI/CD pipelines, and continuous stakeholder previews.' },
    { num: '04', title: 'Security & Performance Hardening', desc: 'Rigorous penetration testing, OWASP compliance verification, load stress profiling, and SEO audit.' },
    { num: '05', title: 'Zero-Downtime Deployment', desc: 'Blue-green rollout, multi-region DNS propagation, and monitoring telemetry calibration.' },
    { num: '06', title: '24/7 Operations & Evolution', desc: 'Proactive APM alerting, FinOps cloud cost optimization, and ongoing feature velocity.' }
  ];

  const faqs = [
    {
      q: 'What types of software projects does Agnexa Technologies specialize in?',
      a: 'Agnexa specializes in custom enterprise software, Generative AI applications and private RAG systems, modern web and mobile apps, cloud migrations (AWS, Azure, GCP), and legacy modernization for companies scaling from seed stage to multinational enterprises.'
    },
    {
      q: 'How does Agnexa guarantee intellectual property (IP) and security?',
      a: 'All intellectual property, proprietary source code, vector embeddings, and design systems belong 100% to our client partners upon completion. We execute strict Non-Disclosure Agreements (NDAs) and adhere to ISO/SOC2 security practices.'
    },
    {
      q: 'Can Agnexa augment our existing internal engineering team?',
      a: 'Yes. We offer both dedicated end-to-end product engineering pods (architect, frontend, backend, QA, DevOps) as well as specialized team augmentation to accelerate critical sprint deliverables.'
    },
    {
      q: 'How quickly can we kick off a new development engagement?',
      a: 'Following your initial project brief, our senior technical architects prepare an architectural assessment and timeline roadmap within 24 to 48 hours, with sprints commencing within 7 business days.'
    },
    {
      q: 'What is Agnexa’s approach to AI safety and data governance?',
      a: 'We design private, on-premise, or VPC-isolated AI architectures ensuring that sensitive enterprise data is never leaked to public model training pipelines, backed by strict role-based access control (RBAC).'
    }
  ];

  const testimonials = [
    {
      quote: "Agnexa delivered our high-throughput telehealth platform ahead of schedule with sub-100ms latency. Their engineering discipline and proactive communication set a benchmark.",
      author: "Dr. Alok Verma",
      role: "Chief Technology Officer",
      company: "HealthTech Innovations",
      rating: 5
    },
    {
      quote: "Migrating our core wealth analytics engine to a multi-cloud Kubernetes cluster seemed daunting until Agnexa took charge. Zero downtime, and our monthly AWS cost dropped by 38%.",
      author: "Marcus Lindholm",
      role: "VP of Engineering",
      company: "Nordic Capital Group",
      rating: 5
    },
    {
      quote: "The RAG assistant built by Agnexa handles over 2 million legal clauses with precision. It has transformed the productivity of our corporate advisory practice.",
      author: "Kavita Ramachandran",
      role: "Managing Director",
      company: "Apex Legal Advisory",
      rating: 5
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <SEO 
        title="Home" 
        description="Agnexa Technologies helps ambitious businesses turn ideas into powerful digital products, intelligent systems, and scalable technology solutions."
      />

      {/* Decorative Gradient Orbs */}
      <div className="glow-orb-blue -top-32 -left-32 opacity-40" />
      <div className="glow-orb-orange top-1/3 -right-32 opacity-30" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-agnexa-orange-500 animate-pulse" />
              <span>Agnexa Technologies — Ideas to Impact</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Build What's Next With <span className="text-gradient-brand">Technology</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Agnexa Technologies helps ambitious businesses turn ideas into powerful digital products, intelligent systems, and scalable technology solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-agnexa-blue-500 via-agnexa-blue-400 to-agnexa-orange-500 hover:from-agnexa-blue-600 hover:to-agnexa-orange-600 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-neon-blue flex items-center justify-center space-x-2 group hover:scale-105 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-xl font-extrabold text-white">99.98%</div>
                <div className="text-xs text-slate-400">Architecture Uptime</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-agnexa-blue-400">SOC2 / ISO</div>
                <div className="text-xs text-slate-400">Security Standards</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-agnexa-orange-400">Zero Lock-In</div>
                <div className="text-xs text-slate-400">100% IP Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive 3D Technology Visual with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Visual Glass Frame with Three.js WebGL Canvas */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-white/70 dark:bg-gradient-to-b dark:from-agnexa-navy-850/80 dark:to-agnexa-navy-950/90 border border-slate-200/80 dark:border-white/15 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              
              {/* Interactive 3D WebGL Canvas */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Hero3DCanvas />
              </div>

              {/* Centered Brand Emblem (Floating over 3D Core) */}
              <div className="relative z-10 pointer-events-none flex flex-col items-center animate-float">
                <div className="w-24 h-24 rounded-2xl bg-white/95 dark:bg-agnexa-navy-950/90 border border-slate-200 dark:border-white/20 p-3.5 shadow-lg dark:shadow-neon-blue backdrop-blur-md flex items-center justify-center">
                  <img src="/logo.png" alt="Agnexa Logo" className="w-full h-full object-contain" />
                </div>
                <div className="mt-3 px-3 py-1 rounded-full bg-white/95 dark:bg-agnexa-navy-950/90 border border-slate-200 dark:border-white/15 shadow-md backdrop-blur-md text-center">
                  <span className="font-extrabold text-xs text-slate-900 dark:text-white tracking-widest">AGNEXA TECHNOLOGIES</span>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-agnexa-orange-500 font-bold">Ideas to Impact</p>
                </div>
              </div>

              {/* Floating Card 1: AI Model Stream */}
              <div className="absolute top-6 left-6 z-20 p-3 rounded-xl bg-white/95 dark:bg-agnexa-navy-950/90 border border-agnexa-blue-500/40 backdrop-blur-md shadow-lg flex items-center space-x-2.5 animate-float pointer-events-none">
                <Sparkles className="w-4 h-4 text-agnexa-blue-500 dark:text-agnexa-blue-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">RAG AI Engine</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">45ms Vector Latency</div>
                </div>
              </div>

              {/* Floating Card 2: Cloud Health */}
              <div className="absolute bottom-6 right-6 z-20 p-3 rounded-xl bg-white/95 dark:bg-agnexa-navy-950/90 border border-agnexa-orange-500/40 backdrop-blur-md shadow-lg flex items-center space-x-2.5 animate-float-reverse pointer-events-none">
                <Server className="w-4 h-4 text-agnexa-orange-500 dark:text-agnexa-orange-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Multi-Cloud Mesh</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Healthy (99.98%)</div>
                </div>
              </div>

              {/* Floating Card 3: Interactive 3D Cue */}
              <div className="absolute bottom-6 left-6 z-20 px-2.5 py-1.5 rounded-lg bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-[10px] text-slate-600 dark:text-slate-400 flex items-center space-x-1.5 pointer-events-none shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-agnexa-orange-500 animate-ping" />
                <span>Move cursor to orbit 3D core</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TRUSTED CAPABILITY & TECH STRIP */}
      <section className="border-y border-white/10 bg-agnexa-navy-900/40 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 shrink-0">
              Enterprise Technology Stacks:
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-slate-300 font-semibold text-sm">
              <span className="flex items-center space-x-2 hover:text-white transition-colors">
                <Cloud className="w-4 h-4 text-agnexa-blue-400" /> <span>AWS & Azure</span>
              </span>
              <span className="flex items-center space-x-2 hover:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-agnexa-orange-400" /> <span>PyTorch & LangChain</span>
              </span>
              <span className="flex items-center space-x-2 hover:text-white transition-colors">
                <Globe2 className="w-4 h-4 text-cyan-400" /> <span>React & Next.js</span>
              </span>
              <span className="flex items-center space-x-2 hover:text-white transition-colors">
                <Server className="w-4 h-4 text-emerald-400" /> <span>Node.js & Go</span>
              </span>
              <span className="flex items-center space-x-2 hover:text-white transition-colors">
                <Database className="w-4 h-4 text-purple-400" /> <span>PostgreSQL & Kafka</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT AGNEXA OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">About Agnexa Technologies</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Indian Technology Prowess With a <span className="text-gradient-blue">Global Vision</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded on the belief that software should not merely automate routines but catalyze systemic transformation, Agnexa Technologies bridges high-end technical architecture with clear business results.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From our engineering hubs in India, our senior cross-functional teams partner with fast-growing startups, mid-sized enterprises, and corporate innovators across North America, Europe, the Middle East, and Asia.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-sm font-bold text-agnexa-blue-400 hover:text-agnexa-blue-300 group"
              >
                <span>Discover our leadership, culture, and story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl glass-card space-y-2">
              <ShieldCheck className="w-8 h-8 text-agnexa-blue-400" />
              <h4 className="text-white font-bold text-base">Zero Technical Debt</h4>
              <p className="text-xs text-slate-400">Architected for long-term scalability and strict code maintainability.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card glass-card-orange space-y-2">
              <Zap className="w-8 h-8 text-agnexa-orange-400" />
              <h4 className="text-white font-bold text-base">Rapid Sprint Cadence</h4>
              <p className="text-xs text-slate-400">Deployable software increments every 14 days with automated QA.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card space-y-2">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h4 className="text-white font-bold text-base">AI-Native Systems</h4>
              <p className="text-xs text-slate-400">Integrating LLMs and automated workflows directly into business ops.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card space-y-2">
              <Award className="w-8 h-8 text-emerald-400" />
              <h4 className="text-white font-bold text-base">100% IP Ownership</h4>
              <p className="text-xs text-slate-400">Full source code, patent rights, and architecture artifacts transferred to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Our Comprehensive IT Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            End-to-end product, design, and engineering capabilities focused on shipping reliable, scalable digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <ServiceCard key={srv.slug || idx} service={srv} index={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all group"
          >
            <span>View detailed architectural breakdown of all 10 enterprise services</span>
            <ChevronRight className="w-4 h-4 text-agnexa-orange-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 5. WHY CHOOSE AGNEXA */}
      <section className="bg-gradient-to-b from-agnexa-navy-950 via-agnexa-navy-900 to-agnexa-navy-950 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Why Partner With Agnexa</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Technology Advantage Your Enterprise Needs
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We combine elite technical execution with transparent governance and unwavering delivery accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-agnexa-blue-500/20 text-agnexa-blue-400 flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Architectural Rigor</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We do not build fragile quick fixes. Every solution is modeled on microservices, resilient databases, and automated testing to handle 10x traffic bursts seamlessly.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card glass-card-orange space-y-4">
              <div className="w-12 h-12 rounded-xl bg-agnexa-orange-500/20 text-agnexa-orange-400 flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Direct Senior Access</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No bureaucratic layers or junior intermediaries. You work directly with senior software architects, DevOps specialists, and experienced technical program leads.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Cost-Efficient Global Delivery</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Harness high-density Indian engineering talent at predictable, transparent milestone rates, maximizing your runway and software ROI without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK INTERACTIVE EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Battle-Tested Engineering</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technologies We Work With
          </h2>
          <p className="text-slate-300 text-sm">
            Proven tools and platforms chosen for reliability, performance, and long-term maintainability.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={techSearchQuery}
              onChange={(e) => setTechSearchQuery(e.target.value)}
              placeholder="Search technologies (e.g., React, Next.js, Django, AWS, Docker, MongoDB)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400 transition-all shadow-inner"
            />
            {techSearchQuery && (
              <button
                onClick={() => setTechSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tab Buttons (hidden when searching across all, or can be used to filter) */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => { setActiveTechTab('all'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${
                activeTechTab === 'all'
                  ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              All Tech
            </button>
            {Object.entries(techCategories).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTechTab(key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${
                  activeTechTab === key
                    ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Cards with Authentic Brand Logos */}
        {(() => {
          // Gather items based on tab or search
          let allItems = [];
          if (activeTechTab === 'all') {
            Object.entries(techCategories).forEach(([catKey, cat]) => {
              cat.items.forEach(it => allItems.push({ ...it, category: cat.title }));
            });
          } else {
            const cat = techCategories[activeTechTab];
            if (cat) {
              allItems = cat.items.map(it => ({ ...it, category: cat.title }));
            }
          }

          if (techSearchQuery.trim()) {
            const q = techSearchQuery.toLowerCase().trim();
            // Search across all technologies if query present
            allItems = Object.values(techCategories)
              .flatMap(c => c.items.map(it => ({ ...it, category: c.title })))
              .filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.role.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q)
              );
          }

          if (allItems.length === 0) {
            return (
              <div className="py-16 text-center space-y-3">
                <p className="text-slate-400 text-sm">No technology found matching "{techSearchQuery}"</p>
                <button
                  onClick={() => setTechSearchQuery('')}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15"
                >
                  Clear Search
                </button>
              </div>
            );
          }

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl glass-card border border-white/10 hover:border-agnexa-blue-500/40 transition-all group flex items-center space-x-4">
                  {/* Original Official Vector Logo */}
                  <div className="w-12 h-12 rounded-xl bg-agnexa-navy-950/80 border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <TechLogo name={item.name} className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-agnexa-blue-400 transition-colors truncate">
                        {item.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400 font-medium shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

        <div className="mt-10 text-center">
          <Link to="/technologies" className="text-xs font-bold text-agnexa-orange-400 hover:text-white inline-flex items-center space-x-1 group">
            <span>Explore full technology matrix & architecture guidelines</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS (6-Stage Agile Delivery) */}
      <section className="bg-agnexa-navy-900/30 border-y border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Structured Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Agnexa 6-Stage Delivery Blueprint
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              From the initial architecture workshop to 24/7 post-launch reliability, our process eliminates surprises and guarantees momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl glass-card space-y-3 relative group">
                <span className="text-2xl font-black text-white/20 group-hover:text-agnexa-blue-400 transition-colors">
                  {step.num}
                </span>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED PROJECTS / CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Demonstrated Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Featured Case Studies
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-xs font-bold text-agnexa-orange-400 hover:text-white flex items-center space-x-1"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug || idx} project={project} />
          ))}
        </div>
      </section>

      {/* 8.5. RECENT PROJECT CASE STUDIES & INSIGHTS (September 20, 2026 & Above) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-agnexa-orange-500/15 border border-agnexa-orange-500/30 text-xs font-bold text-agnexa-orange-500 dark:text-agnexa-orange-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agnexa Engineering Dispatches</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Recent Case Studies & Architectural Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-2xl">
              Deep technical breakdowns, production metrics, and proven results from our recent enterprise software platform deliveries.
            </p>
          </div>
          <Link
            to="/blog"
            className="text-xs font-bold text-agnexa-blue-500 dark:text-agnexa-blue-400 hover:underline flex items-center space-x-1"
          >
            <span>Explore all case study insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(latestBlogs.length > 0 ? latestBlogs : fallbackBlogs.slice(0, 3)).map((blog, idx) => (
            <BlogCard key={blog.slug || idx} blog={blog} />
          ))}
        </div>
      </section>

      {/* 9. INDUSTRIES SERVED */}
      <section className="border-t border-white/10 py-20 bg-agnexa-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Domain Specialization</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Industries We Empower
            </h2>
            <p className="text-slate-300 text-sm">
              We understand the compliance mandates, transaction velocities, and security requirements unique to your vertical.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'FinTech & Banking', count: 'High-Frequency APIs' },
              { name: 'Healthcare & MedTech', count: 'HIPAA & HL7' },
              { name: 'E-Commerce & Retail', count: 'Omnichannel Scale' },
              { name: 'Logistics & Fleet', count: 'Real-Time Telemetry' },
              { name: 'EdTech Systems', count: 'Interactive Sandboxes' },
              { name: 'Smart Cities & IoT', count: 'Sensor Gateways' },
            ].map((ind, i) => (
              <Link
                key={i}
                to="/industries"
                className="p-5 rounded-2xl glass-card text-center hover:border-agnexa-blue-400 transition-all flex flex-col justify-between"
              >
                <div className="text-sm font-bold text-white">{ind.name}</div>
                <div className="text-[10px] text-agnexa-blue-400 mt-2 font-mono">{ind.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. AI / TECHNOLOGY INNOVATION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-agnexa-navy-900 via-agnexa-navy-850 to-agnexa-navy-900 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 rounded-full bg-agnexa-orange-500/10 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-agnexa-orange-500/20 text-agnexa-orange-400 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Generation AI Practice</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Turn Proprietary Company Knowledge Into Private, Autonomous AI Agents
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Agnexa builds secure, on-premise and VPC-hosted Retrieval-Augmented Generation (RAG) platforms and intelligent agent workflows. Zero data leakage, strict citation backing, and sub-second inference latency.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/services/ai-machine-learning"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-agnexa-orange-500 to-agnexa-orange-400 text-white font-bold text-sm text-center shadow-neon-orange hover:scale-105 transition-all"
              >
                Explore AI Solutions
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm text-center hover:bg-white/10 transition-all"
              >
                Request an AI Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-blue-400">Verified Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted By Engineering Leaders
          </h2>
          <p className="text-slate-300 text-sm">
            Read how we collaborate with technology teams to achieve exceptional software quality and velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass-card flex flex-col justify-between space-y-6">
              <p className="text-slate-200 text-sm italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-white text-sm">{t.author}</div>
                <div className="text-xs text-agnexa-blue-400 font-medium">{t.role}</div>
                <div className="text-xs text-slate-400">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. STATISTICS / ACHIEVEMENTS */}
      <section className="bg-agnexa-navy-900/50 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((st, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-agnexa-blue-300 to-agnexa-orange-400 font-sans">
                  {st.value}
                </div>
                <div className="text-sm font-bold text-white">{st.label}</div>
                <div className="text-xs text-slate-400">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Common Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to know about partnering with Agnexa Technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card overflow-hidden border border-white/10 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-agnexa-blue-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-agnexa-orange-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. CTA CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl p-10 sm:p-16 bg-white dark:bg-gradient-to-r dark:from-agnexa-navy-900 dark:via-agnexa-blue-950 dark:to-agnexa-navy-900 border border-slate-200 dark:border-agnexa-blue-500/40 text-center space-y-6 relative overflow-hidden shadow-xl dark:shadow-neon-blue">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-agnexa-blue-50 dark:bg-white/10 text-agnexa-blue-600 dark:text-white border border-agnexa-blue-200 dark:border-white/15 text-xs font-semibold">
            <span>Ready To Turn Ideas Into Impact?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            Let's Architect Your Next Breakthrough Software Platform
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an introductory technical consultation with our engineering directors. Receive an architectural roadmap and feasibility assessment within 24 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-agnexa-orange-500 to-agnexa-orange-400 hover:from-agnexa-orange-600 hover:to-agnexa-orange-500 !text-white font-bold text-sm uppercase tracking-wider transition-all shadow-neon-orange hover:scale-105"
            >
              Start Your Project Consultation
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white font-semibold text-sm transition-all"
            >
              Explore Completed Work
            </Link>
          </div>

          {/* Direct Leadership & Location Contact Line */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agnexa-orange-500 flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Founder & CEO:</strong> Praful Sonwane</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agnexa-blue-600 flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Address:</strong> G 9 Agrawal Colony, Pithampur</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <a href="tel:+919302433799" className="text-slate-700 dark:text-slate-300 hover:text-agnexa-blue-600 dark:hover:text-white transition-colors">
                <strong className="text-slate-900 dark:text-white font-semibold">Contact:</strong> +91 9302433799
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
