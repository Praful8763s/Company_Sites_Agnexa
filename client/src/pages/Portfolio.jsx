import React, { useState, useEffect } from 'react';
import { portfolioApi } from '../services/api';
import ProjectCard from '../components/cards/ProjectCard';
import SEO from '../components/common/SEO';
import { Sparkles, Layers } from 'lucide-react';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await portfolioApi.getAll();
        if (res.data.portfolio) {
          setProjects(res.data.portfolio);
        }
      } catch (err) {
        console.warn('Error fetching portfolio:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const industries = ['All', ...new Set(projects.map(p => p.industry).filter(Boolean))];

  const filteredProjects = projects.filter(p => {
    return selectedIndustry === 'All' || p.industry === selectedIndustry;
  });

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Case Studies & Portfolio" 
        description="Explore Agnexa Technologies demonstrated track record across Healthcare, FinTech, E-Commerce, Logistics, EdTech, and AI."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>Proven Engineering Outcomes</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Case Studies & <span className="text-gradient-brand">Technical Solutions</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Examine how we decompose high-stakes technical problems into scalable, resilient software architectures with measurable business impact.
        </p>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedIndustry === ind
                  ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="py-24 text-center text-slate-400">Loading case studies...</div>
        ) : filteredProjects.length === 0 ? (
          <div className="py-24 text-center text-slate-400">No case studies found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug || idx} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
