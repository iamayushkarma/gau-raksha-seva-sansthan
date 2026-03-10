import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/api-error.js';

export const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'Access denied. No token provided.');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // { id, role } available in next handler
    next();
  } catch (err) {
    throw new ApiError(401, 'Invalid or expired token.');
  }
};
