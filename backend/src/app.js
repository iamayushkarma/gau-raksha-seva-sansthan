import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/admin.routes.js';
import donationOptionsRoutes from './routes/donation-options.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/donation-options', donationOptionsRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errors: err.errors || [],
  });
});
export default app;
