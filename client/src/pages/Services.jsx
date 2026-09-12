import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesApi } from '../services/api';
import ServiceCard from '../components/cards/ServiceCard';
import SEO from '../components/common/SEO';
import { Search, Sparkles, Filter } from 'lucide-react';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await servicesApi.getAll();
        if (res.data.services) {
          setServices(res.data.services);
        }
      } catch (err) {
        console.warn('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const categories = ['All', ...new Set(services.map(s => s.category).filter(Boolean))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.techStack || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Enterprise IT Services" 
        description="Explore Agnexa Technologies specialized IT engineering services: Software Development, Web Platforms, Mobile Apps, AI & ML, Cloud & DevOps, Cybersecurity, Data Analytics, UI/UX, and IT Consulting."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>Full-Spectrum Technology Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Specialized IT Capabilities For <span className="text-gradient-brand">Enterprise Impact</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          From custom software and AI systems to cloud modernization and cybersecurity audits, Agnexa delivers end-to-end technical execution tailored to your business architecture.
        </p>

        {/* Filter and Search Controls */}
        <div className="mt-12 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, technology, or capability..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.slice(0, 4).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="py-24 text-center text-slate-400">Loading enterprise capabilities...</div>
        ) : filteredServices.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <p className="text-slate-400 text-base">No services found matching your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-bold text-agnexa-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <ServiceCard key={service.slug || idx} service={service} index={idx} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
