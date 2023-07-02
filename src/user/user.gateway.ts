import Container from "../../Container";
import Database from "../../database/database";

class UserGateway {
    private database: () => Database;

    constructor(container: Container) {
        this.database = () => container.get(Database)
    }

    // Implementation of gateway methods for products
}

export default UserGateway;