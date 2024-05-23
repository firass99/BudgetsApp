import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/auth/schema/user.schema";


@Schema({
    timestamps:true
})
export class Transaction {


    
    @Prop({ required: true })
    titre: string;

    
    @Prop({ required: true })
    description:string;

    @Prop({ required: true })
    amount: string;
  
    @Prop({ required: true })
    date: string;
  
    @Prop({ required: true, type: String, ref: User.name })
    user: string;
  
    @Prop({ required: true, type: String })
    category: string; 
  
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);