import { dbStore } from '../config/db.js';

export const getServices = async (req, res) => {
  try {
    const services = await dbStore.services.find();
    res.status(200).json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services.',
      error: error.message
    });
  }
};

export const getServiceBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const service = await dbStore.services.findOne({ slug });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: `Service with slug "${slug}" not found.`
      });
    }

    res.status(200).json({
      success: true,
      service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve service.',
      error: error.message
    });
  }
};

export const createService = async (req, res) => {
  try {
    const { title, slug, category, tagline, problem, solution, features, techStack, process, benefits } = req.body;

    if (!title || !slug || !tagline) {
      return res.status(400).json({
        success: false,
        message: 'Title, slug, and tagline are required.'
      });
    }

    const existing = await dbStore.services.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'A service with this slug already exists.'
      });
    }

    const newService = await dbStore.services.create({
      title,
      slug: slug.toLowerCase().trim(),
      category: category || 'Enterprise Solution',
      tagline,
      problem: problem || '',
      solution: solution || '',
      features: features || [],
      techStack: techStack || [],
      process: process || [],
      benefits: benefits || []
    });

    res.status(201).json({
      success: true,
      message: 'Service created successfully.',
      service: newService
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create service.',
      error: error.message
    });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await dbStore.services.findByIdAndUpdate(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Service updated successfully.',
      service: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update service.',
      error: error.message
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dbStore.services.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Service deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete service.',
      error: error.message
    });
  }
};
