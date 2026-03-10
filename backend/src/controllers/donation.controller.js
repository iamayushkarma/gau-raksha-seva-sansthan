import connection_pool from '../config/db.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

// Insert a new record into donation table in database
const createDonation = asyncHandler(async (req, res) => {
  const { name, phone, amount, seva, is_anonymous } = req.body;

  if (!amount || !seva) {
    throw new ApiError(400, 'Amount and seva are required');
  }

  if (!is_anonymous && (!name || !phone)) {
    throw new ApiError(
      400,
      'Name and phone are required for non-anonymous donations'
    );
  }

  const [result] = await connection_pool.query(
    'INSERT INTO donations (name, phone, amount, seva, is_anonymous) VALUES (?, ?, ?, ?, ?)',
    [
      is_anonymous ? null : name,
      is_anonymous ? null : phone,
      amount,
      seva,
      is_anonymous ? 1 : 0,
    ]
  );

  // update stats table
  await connection_pool.query(
    `
    UPDATE donation_stats SET
      total_donors = total_donors + 1,
      total_amount = total_amount + ?,
      anonymous_count = anonymous_count + ?
    WHERE id = 1
  `,
    [amount, is_anonymous ? 1 : 0]
  );

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { id: result.insertId },
        'Donation saved successfully'
      )
    );
});

// List of all donations in decending order
const getAllDonations = asyncHandler(async (req, res) => {
  const [rows] = await connection_pool.query(
    'SELECT * FROM donations ORDER BY created_at DESC'
  );
  return res.status(200).json(new ApiResponse(200, rows, 'Success'));
});

// Get donation stats for bashboard stats card
const getDonationStats = asyncHandler(async (req, res) => {
  const [[stats]] = await connection_pool.query(
    'SELECT * FROM donation_stats WHERE id = 1'
  );
  return res.status(200).json(new ApiResponse(200, stats, 'Success'));
});

export { createDonation, getAllDonations, getDonationStats };
