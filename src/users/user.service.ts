import { Service } from 'typedi';

@Service()
export class UserService {
    getUsers(id: any) {
        return ['User 1', 'User 2', 'User 3'];
    }
}
