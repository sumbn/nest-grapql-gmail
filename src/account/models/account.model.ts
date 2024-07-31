import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  name: string;
}
