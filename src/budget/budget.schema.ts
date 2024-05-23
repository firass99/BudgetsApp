import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BudgetController } from './budget.controller';
import { Categories } from "src/categories/models/Categories.models";



@Schema({
    timestamps:true
})
export class Budget {
    @Prop()
    amount: String;

  
    @Prop({ required: true, type: String, ref: Categories.name })
    category: string;
  
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);