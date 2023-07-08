import { Inject, Service } from 'typedi';
import { UserService } from './user.service';
import 'reflect-metadata';

@Service()
export class UserController {
    private userService: UserService;
    constructor(@Inject() userService: UserService) {
        this.userService = userService;
    }
    getUsers(req: any, res: any) {
        return this.userService.getUsers(req.params.id);
    }
}
