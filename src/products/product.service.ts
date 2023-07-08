import { DIContainer } from "../../config/DIContainer";
import { ProductGateway } from "./product.gateway";

export class ProductService {
    private productGateway: ProductGateway;
    constructor() {
        this.productGateway = DIContainer.instance.resolve<ProductGateway>('productGateway');
    }
    async getProductById(id: string): Promise<any> {
        return await this.productGateway.getProductById(id)
    }
}