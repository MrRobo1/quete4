import { Field, ObjectType } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Wilder {
  @Field()
  _id: string;

  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  city: string;
}
// testtt
// fre
// testststg
export const WilderModel = getModelForClass(Wilder);
