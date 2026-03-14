import connection_pool from '../config/db.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

const createQuery = asyncHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !message || !phone) {
    throw new ApiError(400, 'Name, phone and message are required');
  }

  const [result] = await connection_pool.query(
    'INSERT INTO contact_queries (name, phone, email, message) VALUES (?, ?, ?, ?)',
    [name, phone, email, message]
  );

  return res
    .status(201)
    .json(
      new ApiResponse(201, { id: result.insertId }, 'Message sent successfully')
    );
});

export { createQuery };
