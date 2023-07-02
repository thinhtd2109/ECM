import Container from '../../Container';
import UserGateway from './user.gateway';

class UserService {
    private userGateway: () => UserGateway;

    constructor(container: Container) {
        this.userGateway = () => container.get(UserGateway);
    }

}

export default UserService;