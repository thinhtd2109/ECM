import express, { Request, Response } from 'express';
import { UserController } from '../src/users/user.controller';
import Container from 'typedi';
import 'reflect-metadata';

const router = express.Router();

const userController = Container.get(UserController);

router.post('/register', async (req: Request, res: Response) => {
    const result = await userController.register(req, res);
    return res.json(result)
});

router.get('/', async (req: Request, res: Response) => {
    const result = userController.getUsers(req, res);
    return res.json({ id: result })
});

router.get('/test', async (req: Request, res: Response) => {
    const result = userController.getProduct();
    return res.json(result)
});



export default router;
