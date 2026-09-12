import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, Globe, Server, Smartphone, Sparkles, Cloud, 
  Database, ShieldCheck, ArrowRight, CheckCircle2, Search, X
} from 'lucide-react';
import { TechLogo } from '../components/icons/TechLogos';
import SEO from '../components/common/SEO';

const techGroups = [
  {
    category: 'Frontend',
    icon: Globe,
    desc: 'Modern reactive frontend frameworks and component architectures for lightning-fast user interfaces.',
    tools: [
      { name: 'React.js', desc: 'Virtual DOM component architecture and rich interactive state management' },
      { name: 'Next.js', desc: 'Server-side rendering (SSR), static generation, and edge API hydration' },
      { name: 'Vue.js', desc: 'Approachable, performant, and versatile progressive web framework' },
      { name: 'Angular', desc: 'Enterprise-scale TypeScript platform for robust single-page applications' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    desc: 'High-performance backend runtimes, scalable microservices, and clean RESTful API architectures.',
    tools: [
      { name: 'Django Framework', desc: 'High-level Python web framework encouraging rapid, pragmatic clean design' },
      { name: 'Node.js Environment', desc: 'Asynchronous event-driven JavaScript runtime built for high-concurrency' },
      { name: 'Express.js', desc: 'Fast, unopinionated, minimalist web framework for enterprise Node APIs' },
      { name: 'Python', desc: 'Versatile, readable programming language for automated workflows and backend logic' }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    desc: 'Reliable relational datastores, managed document databases, and high-speed in-memory caches.',
    tools: [
      { name: 'MongoDB Atlas', desc: 'Fully managed cloud document database engineered for developer flexibility' },
      { name: 'PostgreSQL relational', desc: 'Powerful, open-source object-relational database with strong ACID guarantees' },
      { name: 'MySQL', desc: 'Battle-tested relational database management system trusted by millions' },
      { name: 'Redis', desc: 'In-memory data structure store used as a distributed cache and message broker' }
    ]
  },
  {
    category: 'Cloud Solutions',
    icon: Cloud,
    desc: 'Scalable cloud infrastructure, virtual compute instances, and multi-region managed networks.',
    tools: [
      { name: 'Amazon Web Services', desc: 'Comprehensive cloud computing platform featuring ECS, S3, RDS, and Lambda' },
      { name: 'Azure', desc: 'Microsoft enterprise cloud ecosystem with deep hybrid identity integration' },
      { name: 'Google Cloud', desc: 'High-performance cloud infrastructure, BigQuery, and scalable container engines' },
      { name: 'Digital Ocean', desc: 'Simple, cost-effective cloud hosting and developer droplet infrastructure' }
    ]
  },
  {
    category: 'DevOps',
    icon: Terminal,
    desc: 'Isolated, repeatable containerization and automated continuous deployment workflows.',
    tools: [
      { name: 'Docker Containerization', desc: 'Standardized application packaging ensuring identical execution across all environments' }
    ]
  }
];

export default function Technologies() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all tools with category info
  const allTools = techGroups.flatMap(g => 
    g.tools.map(t => ({ ...t, category: g.category, groupIcon: g.icon }))
  );

  // Filter tools by search and group
  const filteredTools = allTools.filter(tool => {
    const matchesGroup = selectedGroup === 'All' || tool.category === selectedGroup;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      tool.name.toLowerCase().includes(q) || 
      tool.desc.toLowerCase().includes(q) || 
      tool.category.toLowerCase().includes(q);
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Modern Technology Stacks" 
        description="Explore the technologies powering Agnexa: React, Next.js, Django, Node.js, AWS, Azure, Docker, PostgreSQL, MongoDB, and Redis."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Terminal className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>Architectural Philosophy</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Battle-Tested Tech Stacks Engineered For <span className="text-gradient-brand">Longevity</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          We select our engineering tools based on ecosystem maturity, developer velocity, community support, and production resilience. Every tool includes its authentic official stack signature.
        </p>

        {/* Live Search & Filter Bar */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies (e.g., React, Django, AWS, Docker, MongoDB, Redis)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedGroup('All')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedGroup === 'All'
                  ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              All Stacks ({allTools.length})
            </button>
            {techGroups.map((group) => (
              <button
                key={group.category}
                onClick={() => setSelectedGroup(group.category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedGroup === group.category
                    ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Cards Grid with Official Brand Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="text-slate-400 text-base">No technologies match "{searchQuery}" in {selectedGroup} stack.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedGroup('All'); }}
              className="px-5 py-2.5 rounded-xl bg-agnexa-blue-500 text-white text-xs font-semibold hover:bg-agnexa-blue-600 shadow-neon-blue transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl glass-card hover:border-agnexa-blue-500/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Official Brand Vector Logo Container */}
                    <div className="w-14 h-14 rounded-2xl bg-agnexa-navy-950/90 border border-white/15 p-2.5 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-agnexa-blue-400/50 transition-all">
                      <TechLogo name={tool.name} className="w-8 h-8" />
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-agnexa-blue-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Verified</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[10px]">Official Stack</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Architecture Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">Our Architectural Tenets</span>
          <h2 className="text-3xl font-extrabold text-white">How We Evaluate & Ship Software</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <h4 className="text-base font-bold text-white">1. Decoupled Modularity</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We design modular boundaries so frontend, APIs, and data layers can be upgraded independently without costly full-system rewrites.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <h4 className="text-base font-bold text-white">2. Automated Quality Gates</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every pull request undergoes automated unit testing, end-to-end integration passes, and static vulnerability scanning before merging.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <h4 className="text-base font-bold text-white">3. FinOps Cost Governance</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We right-size cloud instances and enforce auto-scaling policies to prevent unexpected runaway AWS/GCP bills.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
        <div className="p-8 rounded-3xl glass-card space-y-4">
          <h3 className="text-2xl font-bold text-white">Need an evaluation of your current architecture?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our Principal Architects will conduct a technical assessment of your code repository and cloud infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider"
          >
            <span>Book Architecture Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
