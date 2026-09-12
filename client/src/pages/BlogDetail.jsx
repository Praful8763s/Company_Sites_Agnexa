import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Tag, ChevronRight, Check } from 'lucide-react';
import { blogApi } from '../services/api';
import SEO from '../components/common/SEO';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await blogApi.getBySlug(slug);
        if (res.data.blog) {
          setBlog(res.data.blog);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        console.warn('Error loading blog article:', err);
        setError('Article not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="pt-36 pb-24 text-center text-slate-400">
        <div className="w-8 h-8 border-2 border-agnexa-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>Loading technical analysis...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Article Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested insight article could not be located.</p>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-agnexa-blue-500 text-white text-xs font-bold uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title={blog.title} 
        description={blog.excerpt}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-agnexa-blue-400 font-medium line-clamp-1">{blog.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-agnexa-orange-500/10 border border-agnexa-orange-500/30 text-agnexa-orange-400">
              {blog.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{blog.readTime || '5 min read'}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-white/10 text-xs text-slate-300">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-agnexa-navy-800 border border-white/10 flex items-center justify-center text-agnexa-blue-400 font-bold">
                {blog.author[0]}
              </div>
              <div>
                <div className="font-bold text-white">{blog.author}</div>
                <div className="text-slate-400">{blog.date}</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-agnexa-blue-400 text-slate-300 hover:text-white flex items-center space-x-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="my-8 rounded-3xl overflow-hidden h-72 sm:h-96 w-full relative border border-white/10 shadow-2xl">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed space-y-6 font-normal">
          {blog.content.split('\n\n').map((paragraph, index) => {
            // Remove any *** or ** markdown asterisks completely
            const cleanParagraph = paragraph
              .replace(/\*\*\*/g, '')
              .replace(/\*\*/g, '')
              .trim();

            if (cleanParagraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold text-slate-900 dark:text-white pt-6 pb-2 text-gradient-blue">
                  {cleanParagraph.replace('### ', '')}
                </h3>
              );
            }
            if (cleanParagraph.startsWith('* ') || cleanParagraph.includes('\n* ')) {
              const items = cleanParagraph
                .split('\n')
                .filter(l => l.trim().startsWith('* '))
                .map(l => l.replace(/^\*\s*/, '').trim());
              return (
                <ul key={index} className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                  {items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(cleanParagraph)) {
              const items = cleanParagraph
                .split('\n')
                .filter(l => /^\d+\.\s/.test(l.trim()))
                .map(l => l.replace(/^\d+\.\s*/, '').trim());
              return (
                <ol key={index} className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                  {items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {cleanParagraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex items-center space-x-2">
            <Tag className="w-4 h-4 text-agnexa-blue-400 shrink-0" />
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((t, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Footer in Article */}
        <div className="mt-16 p-8 rounded-3xl glass-card bg-gradient-to-r from-agnexa-navy-900 to-agnexa-blue-950 border border-agnexa-blue-500/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Need guidance applying these concepts?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Schedule an architectural session with our engineering directors to benchmark your systems.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-agnexa-blue-500 to-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-neon-blue"
          >
            <span>Consult Our Architects</span>
          </Link>
        </div>

      </article>
    </div>
  );
}
