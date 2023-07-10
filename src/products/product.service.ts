import { Inject, Service } from "typedi";
import { ProductGateway } from "./product.gateway";


@Service()
export class ProductService {
    private productGateway: ProductGateway;
    constructor(@Inject() productGateway: ProductGateway) {
        this.productGateway = productGateway;
    }
    async getProductById(id: string): Promise<any> {
        return await this.productGateway.getProductById(id)
    }
}