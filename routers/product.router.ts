import express, { Request, Response } from 'express';
import Container from 'typedi';
import { ProductController } from '../src/products/product.controller';
const router = express.Router();

const productController = Container.get(ProductController);
router.get('/:id', async (req: Request, res: Response) => {
    const result = await productController.getProductById(req, res);
    return res.json(result)
});

router.get('/', async (req: Request, res: Response) => {
    const result = await productController.getProductById(req, res);
    return res.json(result)
});

export default router;
