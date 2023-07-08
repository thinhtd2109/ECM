import express from 'express';
import userRoutes from './user.router';
import productRoutes from './product.router';

const router = express.Router();
router.use('/user', userRoutes);
router.use('/product', productRoutes)
export default router;
