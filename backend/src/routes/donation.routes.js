import express from 'express';
import {
  createDonation,
  getAllDonations,
  getDonationStats,
  getDonations,
} from '../controllers/donation.controller.js';
import { verifyAdminToken } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/stats', verifyAdminToken, getDonationStats); // admin only
router.post('/', createDonation); // public
router.get('/', verifyAdminToken, getDonations); // admin only
export default router;
