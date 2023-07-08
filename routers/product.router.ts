import express, { Request, Response } from 'express';
import { ProductController } from '../src/products/product.controller';
const router = express.Router();
const productController = new ProductController();
router.get('/:id', async (req: Request, res: Response) => {
    const result = await productController.getProductById(req, res);
    return res.json({ id: result })
});

export default router;
