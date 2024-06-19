import mongoose from "mongoose";
import validator from "validator";


const appointmentSchema = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength:[13,"Should have atleast 13 characters"],
        maxLength:[13,"Should have atleast 13 characters"]
    },
    dob:{
        type:Date,
        required:[true,"DOB is neccessary"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    appointment_date:{
        type: String,
        required:true,
    },
    department:{
        type: String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    hasVisited:{
        type:Boolean,
        required:true
    },
    doctorId:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:["Pending","Approved","Rejected"]
    }
});

export const Appointment = mongoose.model("Appointment",appointmentSchema);