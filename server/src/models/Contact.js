import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, 'Full name is required'], trim: true },
  company: { type: String, trim: true, default: '' },
  email: { type: String, required: [true, 'Email is required'], lowercase: true, trim: true },
  phone: { type: String, trim: true, default: '' },
  service: { type: String, required: [true, 'Service is required'] },
  budget: { type: String, default: 'Flexible' },
  timeline: { type: String, default: 'Flexible' },
  message: { type: String, required: [true, 'Project message is required'], minlength: 10 },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'In Progress', 'Converted', 'Closed'],
    default: 'New'
  },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;
