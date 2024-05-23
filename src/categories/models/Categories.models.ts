import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories {
  @Prop({ required: true })
  fullname: string;

}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);