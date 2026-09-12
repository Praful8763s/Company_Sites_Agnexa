import express from 'express';
import { submitApplication, getApplications, updateApplicationStatus } from '../controllers/applicationController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', submitApplication);
router.get('/applications', protect, adminOnly, getApplications);
router.patch('/applications/:id', protect, adminOnly, updateApplicationStatus);

export default router;
