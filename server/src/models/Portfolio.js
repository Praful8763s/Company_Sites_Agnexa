import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  industry: { type: String, required: true },
  clientName: { type: String, default: 'Client Partner' },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  technologies: [{ type: String }],
  features: [{ type: String }],
  results: [{
    metric: String,
    label: String
  }],
  image: { type: String, default: '' },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
