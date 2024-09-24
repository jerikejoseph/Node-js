import mongoose from "mongoose";


const EmpSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:String},
    phone:{type:String},
    place:{type:String}
  

})

export default mongoose.model.Employees||mongoose.model("Employee",EmpSchema)