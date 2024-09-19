import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:Number},
    phone:{type:Number},
    blood:{type:String},
    place:{type:String}
})
export default mongoose.model.User||mongoose.model("User",userSchema)