import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import 'reflect-metadata';
import { RegisterUserDto } from '../../model/user.dto';

@Service()
export class UserController {
    private userService: UserService;
    constructor(@Inject() userService: UserService) {
        this.userService = userService;
    }
    async register(request: Request, response: Response) {
        const data = request.body as RegisterUserDto;
        return await this.userService.register(data)
    }
    getUsers(req: any, res: any) {
        return this.userService.getUsers(req.params.id);
    }
}
