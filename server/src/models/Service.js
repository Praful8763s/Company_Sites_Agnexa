import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { type: String, required: true },
  tagline: { type: String, required: true },
  icon: { type: String, default: 'Code2' },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  features: [{ type: String }],
  techStack: [{ type: String }],
  process: [{
    step: String,
    title: String,
    desc: String
  }],
  benefits: [{ type: String }]
}, { timestamps: true });

export const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
export default Service;
