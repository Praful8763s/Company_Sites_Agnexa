import express from 'express';
import { subscribeNewsletter, getSubscribers, updateSubscriberStatus } from '../controllers/newsletterController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', subscribeNewsletter);
router.get('/', protect, adminOnly, getSubscribers);
router.patch('/:id', protect, adminOnly, updateSubscriberStatus);

export default router;
