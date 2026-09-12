import { dbStore } from '../config/db.js';

export const createContact = async (req, res) => {
  try {
    const { fullName, company, email, phone, service, budget, timeline, message } = req.body;

    if (!fullName || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, service required, and project message.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const newContact = await dbStore.contacts.create({
      fullName: fullName.trim(),
      company: (company || '').trim(),
      email: email.toLowerCase().trim(),
      phone: (phone || '').trim(),
      service,
      budget: budget || 'Flexible',
      timeline: timeline || 'Flexible',
      message: message.trim(),
      status: 'New'
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to Agnexa Technologies. Our enterprise solutions architect will contact you within 24 hours.',
      contact: newContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry.',
      error: error.message
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await dbStore.contacts.find();
    const sorted = [...(contacts || [])].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    res.status(200).json({
      success: true,
      count: sorted.length,
      contacts: sorted
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enquiries.',
      error: error.message
    });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const validStatuses = ['New', 'Contacted', 'In Progress', 'Converted', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed statuses: ${validStatuses.join(', ')}`
      });
    }

    const updatePayload = {};
    if (status) updatePayload.status = status;
    if (notes !== undefined) updatePayload.notes = notes;

    const updated = await dbStore.contacts.findByIdAndUpdate(id, updatePayload);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry status updated successfully.',
      contact: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update enquiry status.',
      error: error.message
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dbStore.contacts.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete enquiry.',
      error: error.message
    });
  }
};
