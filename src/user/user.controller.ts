import { Request, Response, NextFunction } from 'express';
import Container from '../../Container';
import UserService from './user.service';

class UserController {
    private userService: () => UserService;
    constructor(container: Container) {
        this.userService = () => container.get(UserService);
    }

    getAllUsers(req: Request, res: Response, next: NextFunction) {
        return res.json({ test: 'test' })
    }

}

export default UserController;
