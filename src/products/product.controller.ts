import { Request, Response } from 'express';
export class ProductController {
    async getProductById(req: Request, res: Response) {
        res.send("product");
    }
}