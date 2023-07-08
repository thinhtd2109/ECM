import { Inject, Service } from 'typedi';
import { RegisterUserDto, UserDto } from '../../model/user.dto';
import Database from '../../config/database';
import 'reflect-metadata';

@Service()
export class UserService {
    private databaseService: Database;
    constructor(@Inject() databaseService: Database) {
        this.databaseService = databaseService;
    }
    getUsers(id: any) { };

    async register(data: RegisterUserDto) {
        const existEmail = await this.databaseService.queryWithFilter('users', [
            { columnName: 'email', value: data.email }]
        ) as UserDto[];

        if (existEmail.length > 0) {
            return { status: false, error: `Thông tin email người dùng đã tồn tại, kiểm tra lại`, data: null }
        }

        const existUserName = await this.databaseService.queryWithFilter('users', [{ columnName: 'username', value: data.username }]);

        if (existUserName.length > 0) {
            return { status: false, error: `Thông tin username người dùng đã tồn tại, kiểm tra lại`, data: null }
        }


        return { test: "test" };
    }
}
