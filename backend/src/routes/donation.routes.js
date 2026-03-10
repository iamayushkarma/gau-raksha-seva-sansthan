import express from 'express';
import {
  createDonation,
  getAllDonations,
} from '../controllers/donation.controller.js';
import { verifyAdminToken } from '../middleware/admin.middleware.js';

const router = express.Router();

router.post('/', createDonation); // public
router.get('/', verifyAdminToken, getAllDonations); // admin only

export default router;
