import { dbStore } from '../config/db.js';

export const getBlogs = async (req, res) => {
  try {
    const list = await dbStore.blogs.find();
    res.status(200).json({
      success: true,
      count: list.length,
      blogs: list
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs.',
      error: error.message
    });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await dbStore.blogs.findOne({ slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: `Article with slug "${slug}" not found.`
      });
    }

    res.status(200).json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve article.',
      error: error.message
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, slug, category, author, readTime, excerpt, content, image, tags } = req.body;

    if (!title || !slug || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title, slug, excerpt, and content are required.'
      });
    }

    const existing = await dbStore.blogs.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'An article with this slug already exists.'
      });
    }

    const newBlog = await dbStore.blogs.create({
      title,
      slug: slug.toLowerCase().trim(),
      category: category || 'Technology',
      author: author || 'Agnexa Engineering Team',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: readTime || '5 min read',
      excerpt,
      content,
      image: image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      tags: tags || ['Tech']
    });

    res.status(201).json({
      success: true,
      message: 'Article published successfully.',
      blog: newBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to publish article.',
      error: error.message
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await dbStore.blogs.findByIdAndUpdate(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Article not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Article updated successfully.',
      blog: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update article.',
      error: error.message
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dbStore.blogs.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Article not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Article deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete article.',
      error: error.message
    });
  }
};
