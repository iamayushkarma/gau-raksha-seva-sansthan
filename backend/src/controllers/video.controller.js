import connection_pool from '../config/db.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

export const getVideos = asyncHandler(async (req, res) => {
  const [rows] = await connection_pool.query(
    'SELECT * FROM videos WHERE is_active = TRUE ORDER BY order_index ASC, created_at ASC'
  );
  return res.status(200).json(new ApiResponse(200, rows, 'Success'));
});

export const createVideo = asyncHandler(async (req, res) => {
  const {
    title_en,
    title_hi,
    description_en,
    description_hi,
    youtube_url,
    thumbnail,
    order_index,
  } = req.body;
  if (!title_en || !description_en || !youtube_url) {
    throw new ApiError(400, 'Title, description and YouTube URL are required');
  }
  const [result] = await connection_pool.query(
    'INSERT INTO videos (title_en, title_hi, description_en, description_hi, youtube_url, thumbnail, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      title_en,
      title_hi,
      description_en,
      description_hi,
      youtube_url,
      thumbnail,
      order_index ?? 0,
    ]
  );
  return res
    .status(201)
    .json(
      new ApiResponse(201, { id: result.insertId }, 'Created successfully')
    );
});

export const updateVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title_en,
    title_hi,
    description_en,
    description_hi,
    youtube_url,
    thumbnail,
    order_index,
  } = req.body;
  const [result] = await connection_pool.query(
    'UPDATE videos SET title_en=?, title_hi=?, description_en=?, description_hi=?, youtube_url=?, thumbnail=?, order_index=? WHERE id=?',
    [
      title_en,
      title_hi,
      description_en,
      description_hi,
      youtube_url,
      thumbnail,
      order_index ?? 0,
      id,
    ]
  );
  if (result.affectedRows === 0) throw new ApiError(404, 'Video not found');
  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Updated successfully'));
});

export const deleteVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const [result] = await connection_pool.query(
    'DELETE FROM videos WHERE id = ?',
    [id]
  );
  if (result.affectedRows === 0) throw new ApiError(404, 'Video not found');
  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Deleted successfully'));
});
