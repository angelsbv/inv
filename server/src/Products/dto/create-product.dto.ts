import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@ObjectType()
export class ProductType {

    @Field(() => ID)
    id: string

    @Field()
    @IsString()
    name: string;

    @Field(() => Int)
    @IsInt()
    stock: number;

    @Field(() => Float)
    @IsInt()
    price: number;

}
