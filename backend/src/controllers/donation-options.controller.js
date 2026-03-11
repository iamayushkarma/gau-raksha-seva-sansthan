import connection_pool from '../config/db.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

export const getDonationOptions = asyncHandler(async (req, res) => {
  const [rows] = await connection_pool.query(
    'SELECT * FROM donation_options WHERE is_active = TRUE ORDER BY created_at ASC'
  );
  return res.status(200).json(new ApiResponse(200, rows, 'Success'));
});

export const createDonationOption = asyncHandler(async (req, res) => {
  const { title_en, title_hi, description_en, description_hi, amount, image } =
    req.body;
  if (!title_en || !description_en || !amount) {
    throw new ApiError(400, 'Title, description and amount are required');
  }
  const [result] = await connection_pool.query(
    'INSERT INTO donation_options (title_en, title_hi, description_en, description_hi, amount, image) VALUES (?, ?, ?, ?, ?, ?)',
    [title_en, title_hi, description_en, description_hi, amount, image]
  );
  return res
    .status(201)
    .json(
      new ApiResponse(201, { id: result.insertId }, 'Created successfully')
    );
});

export const updateDonationOption = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title_en, title_hi, description_en, description_hi, amount, image } =
    req.body;

  const [result] = await connection_pool.query(
    'UPDATE donation_options SET title_en=?, title_hi=?, description_en=?, description_hi=?, amount=?, image=? WHERE id=?',
    [title_en, title_hi, description_en, description_hi, amount, image, id]
  );

  if (result.affectedRows === 0) throw new ApiError(404, 'Option not found');
  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Updated successfully'));
});

export const deleteDonationOption = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const [result] = await connection_pool.query(
    'DELETE FROM donation_options WHERE id = ?',
    [id]
  );
  if (result.affectedRows === 0) throw new ApiError(404, 'Option not found');
  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Deleted successfully'));
});
