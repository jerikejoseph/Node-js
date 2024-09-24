import EmpSchema from "./employee.model.js"
export async function addEmp(req,res){
  

    try {
        // console.log(req.body);
        const{name,age,dob,phone,place}=req.body        
        // console.log(name,age,dob,phone,place);

        // Validation
        if(!(name&&age&&dob&&phone&&place))
            return res.status(404).send({msg:"Fields Are Empty"})
                
            EmpSchema.create({name,age,dob,phone,place}).then((data)=>{
                return res.status(201).send({msg:data})            
            }).catch((error)=>{
              return  res.status(404).send({msg:error})            
    
            })

        
    } catch (error) {
      return  res.status(404).send({msg:error})                    

        }
}