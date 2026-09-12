import { dbStore } from '../config/db.js';

export const getIndustries = async (req, res) => {
  try {
    const industries = await dbStore.industries.find();
    res.status(200).json({
      success: true,
      count: industries.length,
      industries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch industries.',
      error: error.message
    });
  }
};

export const getIndustryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const industry = (await dbStore.industries.findOne({ slug })) || 
                     (await dbStore.industries.findOne({ id: slug }));

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: `Industry "${slug}" not found.`
      });
    }

    res.status(200).json({
      success: true,
      industry
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve industry.',
      error: error.message
    });
  }
};
