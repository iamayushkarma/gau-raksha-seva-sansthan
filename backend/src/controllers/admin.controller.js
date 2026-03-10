import connection_pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

const adminLogin = asyncHandler(async (req, res) => {
  // extracting email and password for request body
  const { username, password } = req.body;

  if (!username || !password) {
    throw new ApiError(400, 'Username and password are required');
  }

  // database query
  const [rows] = await connection_pool.query(
    'SELECT * FROM admin WHERE username = ?',
    [username]
  );

  if (rows.length === 0) {
    throw new ApiError(401, 'Invalid credentials');
  }

  // grabs the first matching admin record from resulted array
  const admin = rows[0];
  if (password !== admin.password) {
    throw new ApiError(401, 'Invalid credentials');
  }

  // generate jwt token
  const token = jwt.sign(
    { id: admin.id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  // return the token and safe admin details (without password)
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        token,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
        },
      },
      'Login successful'
    )
  );
});

export { adminLogin };
