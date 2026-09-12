import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
  readTime: { type: String, default: '5 min read' },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  tags: [{ type: String }]
}, { timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;
