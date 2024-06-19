import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"Should gave atleast 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Should gave atleast 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Should have atleast 10 characters"],
        maxLength:[10,"Should have atleast 10 characters"]
    },
    message:{
        type:String,
        required:true,
        minLength:[2,"Should gave atleast 2 characters"]
    }
})

export const Message = mongoose.model("Message",messageSchema);