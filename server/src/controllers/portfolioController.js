import { dbStore } from '../config/db.js';

export const getPortfolio = async (req, res) => {
  try {
    const list = await dbStore.portfolio.find();
    res.status(200).json({
      success: true,
      count: list.length,
      portfolio: list
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio case studies.',
      error: error.message
    });
  }
};

export const getPortfolioBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await dbStore.portfolio.findOne({ slug });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Case study with slug "${slug}" not found.`
      });
    }

    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve case study.',
      error: error.message
    });
  }
};

export const createPortfolio = async (req, res) => {
  try {
    const { title, slug, industry, clientName, challenge, solution, technologies, features, results, image, featured } = req.body;

    if (!title || !slug || !challenge || !solution) {
      return res.status(400).json({
        success: false,
        message: 'Title, slug, challenge, and solution are required.'
      });
    }

    const existing = await dbStore.portfolio.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'A case study with this slug already exists.'
      });
    }

    const newProject = await dbStore.portfolio.create({
      title,
      slug: slug.toLowerCase().trim(),
      industry: industry || 'Technology',
      clientName: clientName || 'Enterprise Partner',
      challenge,
      solution,
      technologies: technologies || [],
      features: features || [],
      results: results || [],
      image: image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      featured: Boolean(featured)
    });

    res.status(201).json({
      success: true,
      message: 'Case study created successfully.',
      project: newProject
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create case study.',
      error: error.message
    });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await dbStore.portfolio.findByIdAndUpdate(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Case study updated successfully.',
      project: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update case study.',
      error: error.message
    });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dbStore.portfolio.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Case study deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete case study.',
      error: error.message
    });
  }
};
