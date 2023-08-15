import express from 'express';
import apiIndexRouter from './api/api-index.js'

const router = express.Router();

router.use('/api', apiIndexRouter);

export default router;