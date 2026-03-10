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
  const sortBy = req.query.sortBy || 'id';
  const sortOrder = req.query.sortOrder === 'asc' ? 'ASC' : 'DESC';
  const filterType = req.query.filterType || ''; // week, month, year, custom
  const dateFrom = req.query.dateFrom || '';
  const dateTo = req.query.dateTo || '';
  const sevaFilter = req.query.seva || '';
  const typeFilter = req.query.type || ''; // anonymous, named

  const conditions = [];
  const params = [];

  // cursor
  if (cursor) {
    conditions.push('id < ?');
    params.push(cursor);
  }

  // search
  if (search) {
    conditions.push('(name LIKE ? OR phone LIKE ? OR seva LIKE ?)');
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  // date filters
  if (filterType === 'week') {
    conditions.push('created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)');
  } else if (filterType === 'month') {
    conditions.push(
      'MONTH(created_at) = MONTH(NOW()) AND YEAR(created_at) = YEAR(NOW())'
    );
  } else if (filterType === 'year') {
    conditions.push('YEAR(created_at) = YEAR(NOW())');
  } else if (filterType === 'custom' && dateFrom && dateTo) {
    conditions.push('DATE(created_at) BETWEEN ? AND ?');
    params.push(dateFrom, dateTo);
  }

  // seva filter
  if (sevaFilter) {
    conditions.push('seva = ?');
    params.push(sevaFilter);
  }

  // type filter
  if (typeFilter === 'anonymous') {
    conditions.push('is_anonymous = 1');
  } else if (typeFilter === 'named') {
    conditions.push('is_anonymous = 0');
  }

  const where =
    conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  // validate sortBy to prevent SQL injection
  const allowedSortFields = ['id', 'amount', 'created_at'];
  const safeSortBy = allowedSortFields.includes(sortBy) ? sortBy : 'id';

  params.push(limit + 1);

  const [rows] = await connection_pool.query(
    `SELECT * FROM donations ${where} ORDER BY ${safeSortBy} ${sortOrder} LIMIT ?`,
    params
  );

  const hasNextPage = rows.length > limit;
  const donations = hasNextPage ? rows.slice(0, limit) : rows;
  const nextCursor = hasNextPage ? donations[donations.length - 1].id : null;

  // get total — use COUNT for filtered queries, stats table for unfiltered
  let total;
  if (search || filterType || sevaFilter || typeFilter) {
    const countParams = params.slice(0, -1); // remove limit param
    const [[countResult]] = await connection_pool.query(
      `SELECT COUNT(*) as total FROM donations ${where}`,
      countParams
    );
    total = countResult.total;
  } else {
    const [[stats]] = await connection_pool.query(
      'SELECT total_donors FROM donation_stats WHERE id = 1'
    );
    total = stats.total_donors;
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        donations,
        nextCursor,
        hasNextPage,
        total,
      },
      'Success'
    )
  );
});

export { createDonation, getAllDonations, getDonationStats, getDonations };
