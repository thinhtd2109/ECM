import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { UserService } from '../users/user.service';
import 'reflect-metadata';

@Service()
export class ProductController {
    constructor(@Inject(() => UserService) private userService: UserService) { }
    async getProductById(req: Request, res: Response) {
        return this.userService.getUsers();
    }
}