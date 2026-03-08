import express from 'express';
import {
  getDonationOptions,
  createDonationOption,
  updateDonationOption,
  deleteDonationOption,
} from '../controllers/donation-options.controller.js';

const router = express.Router();

router.get('/', getDonationOptions); // public
router.post('/', createDonationOption); // admin
router.put('/:id', updateDonationOption); // admin
router.delete('/:id', deleteDonationOption); // admin

export default router;
