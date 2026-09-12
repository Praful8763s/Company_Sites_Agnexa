import React, { useState, useEffect } from 'react';
import { blogApi } from '../services/api';
import BlogCard from '../components/cards/BlogCard';
import SEO from '../components/common/SEO';
import { Sparkles, Search } from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await blogApi.getAll();
        if (res.data.blogs) {
          setBlogs(res.data.blogs);
        }
      } catch (err) {
        console.warn('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = ['All', ...new Set(blogs.map(b => b.category).filter(Boolean))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      (blog.tags || []).some(t => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Engineering Blog & Insights" 
        description="Technical insights, Generative AI architectural blueprints, and cloud modernization strategies from Agnexa Technologies engineering team."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-agnexa-orange-400" />
          <span>Agnexa Engineering Dispatch</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Engineering Thought Leadership & <span className="text-gradient-brand">Technical Insights</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Deep-dives into production RAG systems, microservices architectures, cloud migrations, and modern security patterns written by our practicing engineers.
        </p>

        {/* Filter and Search */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles by topic, framework, or title..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-agnexa-blue-400"
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

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="py-24 text-center text-slate-400">Loading engineering articles...</div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-24 text-center text-slate-400">No articles found matching your query.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <BlogCard key={blog.slug || idx} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
