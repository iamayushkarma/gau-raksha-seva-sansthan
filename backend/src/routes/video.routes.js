import express from 'express';
import {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} from '../controllers/video.controller.js';

const router = express.Router();

router.get('/', getVideos); // public
router.post('/', createVideo); // admin
router.put('/:id', updateVideo); // admin
router.delete('/:id', deleteVideo); // admin

export default router;
