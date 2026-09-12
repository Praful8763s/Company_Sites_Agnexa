import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <article className="group rounded-3xl overflow-hidden glass-card flex flex-col justify-between transition-all duration-300">
      {/* Blog Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-agnexa-navy-900">
        <img 
          src={blog.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agnexa-navy-950 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-agnexa-navy-950/80 backdrop-blur-md border border-white/20 text-agnexa-orange-400">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{blog.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{blog.readTime || '5 min read'}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-agnexa-blue-400 transition-colors leading-snug">
            {blog.title}
          </h3>

          <p className="text-slate-300 text-xs mt-2.5 line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium line-clamp-1">
            By {blog.author}
          </span>
          <Link
            to={`/blog/${blog.slug}`}
            className="text-xs font-bold text-agnexa-blue-400 group-hover:text-white flex items-center space-x-1"
          >
            <span>Read Article</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
