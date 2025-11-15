import mongoose, {Document, model, Schema ,Model } from "mongoose";

interface forSchema extends Document {
    name:string,
    email:string,
    phoneNumber:string,
    createdAt:Date,
    updatedAt:Date,
}

const contactSchema  = new Schema<forSchema>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
},{timestamps:true});

const contactModel: Model<forSchema> =mongoose.models.contact || model<forSchema>("contact", contactSchema);

export default contactModel;
