import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductInput {

    @Field()
    name: string;

    @Field(() => Int)
    stock: number;

    @Field(() => Float)
    price: number;
}
