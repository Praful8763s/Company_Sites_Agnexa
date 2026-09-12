import { dbStore } from '../config/db.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalEnquiries = await dbStore.contacts.countDocuments();
    const newEnquiries = await dbStore.contacts.countDocuments({ status: 'New' });
    const inProgressEnquiries = await dbStore.contacts.countDocuments({ status: 'In Progress' });
    const convertedEnquiries = await dbStore.contacts.countDocuments({ status: 'Converted' });
    const totalSubscribers = await dbStore.newsletters.countDocuments({ status: 'active' });
    const totalBlogs = await dbStore.blogs.countDocuments();
    const totalPortfolio = await dbStore.portfolio.countDocuments();
    const totalServices = await dbStore.services.countDocuments();
    const totalApplications = await dbStore.applications.countDocuments();
    const totalUsers = await dbStore.users.countDocuments();

    // Recent activity items
    const recentContacts = await dbStore.contacts.find();
    const sortedContacts = [...(recentContacts || [])]
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      .slice(0, 5);

    res.status(200).json({
      success: true,
      stats: {
        totalEnquiries,
        newEnquiries,
        inProgressEnquiries,
        convertedEnquiries,
        totalSubscribers,
        totalBlogs,
        totalPortfolio,
        totalServices,
        totalApplications,
        totalUsers
      },
      recentEnquiries: sortedContacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve admin dashboard stats.',
      error: error.message
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await dbStore.users.find();
    const safeUsers = users.map(u => ({
      id: u._id || u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      company: u.company,
      createdAt: u.createdAt
    }));

    res.status(200).json({
      success: true,
      count: safeUsers.length,
      users: safeUsers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve users.',
      error: error.message
    });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ success: false, message: 'Invalid role.' });
    }

    const updated = await dbStore.users.findByIdAndUpdate(id, { role });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    res.status(200).json({
      success: true,
      message: 'User role updated successfully.',
      user: {
        id: updated._id || updated.id,
        name: updated.name,
        email: updated.email,
        role: updated.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update user role.',
      error: error.message
    });
  }
};
