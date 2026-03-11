import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/admin.routes.js';
import donationOptionsRoutes from './routes/donation-options.routes.js';
import donationRoutes from './routes/donation.routes.js';
import videoRouter from './routes/video.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/donation-options', donationOptionsRoutes);
app.use('/api/v1/donations', donationRoutes);
app.use('/api/v1/videos', videoRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errors: err.errors || [],
  });
});
export default app;
