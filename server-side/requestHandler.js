import userSchema from "./models/user.model.js"
export function addDonor(req,res) {
    try {
        const{name,age,dob,phone,blood,place}=req.body
        console.log(name,age,dob,phone,blood,place);
        userSchema.create({name,age,dob,phone,blood,place})
        .then((data)=>{
            res.status(201).send({msg:data})
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })
    } catch (error) {
        res.status(404).send({msg:error})
    }
}