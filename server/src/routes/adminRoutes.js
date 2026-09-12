import express from 'express';
import { getDashboardStats, getUsers, updateUserRole } from '../controllers/adminController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/stats', getDashboardStats);
router.get('/users', getUsers);
router.patch('/users/:id/role', updateUserRole);

export default router;
