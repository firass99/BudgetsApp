import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User{
    @Prop()
    name:String;

    @Prop()
    last_name:String;

    @Prop({unique:[true, "Duplicate email entered"]})
    email:String;

    @Prop()
    age:String;
    
    @Prop()
    password:String;

}
export const UserSchema = SchemaFactory.createForClass(User)
