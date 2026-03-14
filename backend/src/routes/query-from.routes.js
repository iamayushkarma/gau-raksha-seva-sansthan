import express from 'express';
import { createQuery } from '../controllers/query-from.controller.js';

const router = express.Router();
router.post('/', createQuery);

export default router;
