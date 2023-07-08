import { DIContainer } from "../../config/DIContainer";
import Database from "../../config/database";

export class ProductGateway {
    private _databaseService: Database;
    constructor() {
        this._databaseService = DIContainer.instance.resolve<Database>('databaseService');
    }
    async getProductById(productId: string) {
        return {
            name: 'John Doe',
            age: 16
        }
    }
}

