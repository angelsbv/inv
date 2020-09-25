import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInput } from './inputs/product.input';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('ProductModel')
        private readonly productModel: Model<Product>,
    ) {}

    async create(createProductDto: ProductInput) {
        const createdProduct = new this.productModel(createProductDto);
        return await createdProduct.save();
    }

    async findAll() {
        return await this.productModel.find().exec();
    }

    async delete(_id: string) {
        return await this.productModel.deleteOne({ _id });
    }

    async update(_id: string, input: ProductInput) {
        return await this.productModel.updateOne({ _id }, input);
    }
}
