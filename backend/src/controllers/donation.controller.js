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
// Get all donation with cursor based pagination to display in frontend
const getDonations = asyncHandler(async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 10, 100);
  const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;
  const search = req.query.search?.trim() || '';

  const conditions = [];
  const params = [];

  if (cursor) {
    conditions.push('id < ?');
    params.push(cursor);
  }

  if (search) {
    conditions.push('(name LIKE ? OR phone LIKE ? OR seva LIKE ?)');
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  const where =
    conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  params.push(limit + 1);

  const [rows] = await connection_pool.query(
    `SELECT * FROM donations ${where} ORDER BY id DESC LIMIT ?`,
    params
  );

  const hasNextPage = rows.length > limit;
  const donations = hasNextPage ? rows.slice(0, limit) : rows;
  const nextCursor = hasNextPage ? donations[donations.length - 1].id : null;

  const [[stats]] = await connection_pool.query(
    'SELECT total_donors FROM donation_stats WHERE id = 1'
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        donations,
        nextCursor,
        hasNextPage,
        total: stats.total_donors,
      },
      'Success'
    )
  );
});

export { createDonation, getAllDonations, getDonationStats, getDonations };
