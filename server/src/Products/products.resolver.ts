import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProductType } from './dto/create-product.dto';
import { ProductUpdateInput } from './inputs/product-update.input';
import { ProductInput } from './inputs/product.input';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Query(() => [ProductType])
    async products() {
        return await this.productsService.findAll();
    }

    @Mutation(() => ProductType)
    async createProduct(@Args('input') input: ProductInput) {
        return await this.productsService.create(input);
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Args('id') id: string) {
        const deleteResult = await this.productsService.delete(id);
        return deleteResult.deletedCount > 0;
    }

    @Mutation(() => Boolean)
    async updateProduct(
        @Args('id') id: string,
        @Args('input') input: ProductUpdateInput,
    ){
        const updateResult = await this.productsService.update(id, input);
        return updateResult.nModified > 0
    }
}
