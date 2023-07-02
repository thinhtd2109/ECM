import Container from "../Container";
import UserController from "../src/user/user.controller";
import UserGateway from "../src/user/user.gateway";
import UserService from "../src/user/user.service";

export default class Registrar {
    private container: Container;

    constructor(container: Container) {
        this.container = container;
    }

    registerGateways(): void {
        const userGateway = new UserGateway(this.container);
        this.container.register(UserGateway, userGateway);
    }

    registerServices(): void {
        const userService = new UserService(this.container);
        this.container.register(UserService, userService);
    }

    registerControllers(): void {
        const userController = new UserController(this.container);
        this.container.register(UserController, userController);
    }


}

