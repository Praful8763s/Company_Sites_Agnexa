import { dbStore } from '../config/db.js';
import { sendApplicationNotification } from '../services/emailService.js';

export const submitApplication = async (req, res) => {
  try {
    const { fullName, email, phone, role, experience, portfolioUrl, resumeNotes } = req.body;

    if (!fullName || !email || !phone || !role || !experience) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email, phone, role, and experience are required.'
      });
    }

    const application = await dbStore.applications.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      role,
      experience,
      portfolioUrl: (portfolioUrl || '').trim(),
      resumeNotes: (resumeNotes || '').trim(),
      status: 'Reviewing'
    });

    // Dispatch email notification to prafulsonwane58@gmail.com
    sendApplicationNotification(application).catch(err => console.warn('App email dispatch warning:', err.message));

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our talent acquisition team will review your profile.',
      application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit application.',
      error: error.message
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const list = await dbStore.applications.find();
    const sorted = [...(list || [])].sort((a, b) => new Date(b.appliedAt || b.createdAt || 0) - new Date(a.appliedAt || a.createdAt || 0));
    res.status(200).json({
      success: true,
      count: sorted.length,
      applications: sorted
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications.',
      error: error.message
    });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['Reviewing', 'Shortlisted', 'Interview Scheduled', 'Rejected', 'Hired'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Valid values: ${validStatuses.join(', ')}`
      });
    }

    const updated = await dbStore.applications.findByIdAndUpdate(id, { status });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Application not found.' });
    }

    res.status(200).json({
      success: true,
      message: 'Application status updated.',
      application: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update application.',
      error: error.message
    });
  }
};
