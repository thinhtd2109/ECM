import express from 'express'
import Container from './Container';
import UserController from './src/user/user.controller';

// Router
export default class Router {
    private router: any;
    private userController: UserController;

    constructor(container: Container) {
        this.router = express.Router();
        this.userController = container.get(UserController);
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/users', this.userController.getAllUsers);
    }

    public getRouter() {
        return this.router;
    }
}
