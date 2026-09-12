import { dbStore } from '../config/db.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid corporate or personal email address.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await dbStore.newsletters.findOne({ email: normalizedEmail });

    if (existing) {
      if (existing.status === 'unsubscribed') {
        const updated = await dbStore.newsletters.findByIdAndUpdate(existing._id || existing.id, {
          status: 'active',
          subscribedAt: new Date().toISOString()
        });
        return res.status(200).json({
          success: true,
          message: 'Welcome back! Your newsletter subscription has been reactivated.',
          subscriber: updated
        });
      }
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to the Agnexa Tech Newsletter.'
      });
    }

    const newSubscriber = await dbStore.newsletters.create({
      email: normalizedEmail,
      status: 'active',
      subscribedAt: new Date().toISOString()
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to Agnexa Technologies weekly engineering & AI insights.',
      subscriber: newSubscriber
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Subscription failed.',
      error: error.message
    });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const list = await dbStore.newsletters.find();
    const sorted = [...(list || [])].sort((a, b) => new Date(b.subscribedAt || b.createdAt || 0) - new Date(a.subscribedAt || a.createdAt || 0));
    res.status(200).json({
      success: true,
      count: sorted.length,
      subscribers: sorted
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers.',
      error: error.message
    });
  }
};

export const updateSubscriberStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await dbStore.newsletters.findByIdAndUpdate(id, { status });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Subscriber not found.' });
    }

    res.status(200).json({ success: true, message: 'Subscriber status updated.', subscriber: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update subscriber.', error: error.message });
  }
};
