import { Service } from "typedi";

@Service()
export class ProductGateway {
    constructor() { }
    async getProductById(productId: string) {
        return {
            name: 'John Doe',
            age: 16
        }
    }
}

