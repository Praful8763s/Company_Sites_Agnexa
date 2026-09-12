import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  portfolioUrl: { type: String, default: '' },
  resumeNotes: { type: String, default: '' },
  status: {
    type: String,
    enum: ['Reviewing', 'Shortlisted', 'Interview Scheduled', 'Rejected', 'Hired'],
    default: 'Reviewing'
  },
  appliedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;
