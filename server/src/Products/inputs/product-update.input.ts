import { Field, Float, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductUpdateInput {

    @Field(() => ID, { nullable: true })
    id: string

    @Field({ nullable: true })
    name: string;

    @Field(() => Int, { nullable: true })
    stock: number;

    @Field(() => Float, { nullable: true })
    price: number;
}
