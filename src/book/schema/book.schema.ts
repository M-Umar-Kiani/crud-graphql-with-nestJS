import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Book{
    @Field((type) => Int)
    id: number;

    @Field()
    title: String;

    @Field((type)=> Int)
    price: number;
}