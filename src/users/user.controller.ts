import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import 'reflect-metadata';
import { RegisterUserDto } from '../../model/user.dto';
import { ProductService } from '../products/product.service';

@Service()
export class UserController {
    private userService: UserService;
    constructor(@Inject() userService: UserService, @Inject(() => ProductService) private productService: ProductService) {
        this.userService = userService;
    }
    async register(request: Request, response: Response) {
        const data = request.body as RegisterUserDto;
        return await this.userService.register(data)
    }
    getUsers(req: any, res: any) {
        return this.userService.getUsers();
    }
    async getProduct() {
        return await this.productService.getProductById('123')
    }
}
