document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log("hii");
    const name=document.getElementById("name").value
    const age=document.getElementById("age").value
    const dob=document.getElementById("dob").value
    const phone=document.getElementById("phone").value
    const place=document.getElementById("place").value
   
    console.log(name,age,dob,phone,place);
        

    await fetch("http://localhost:3000/api/addEmployee",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,phone,place}),
    }).then((res)=>{
        console.log(res.status); 
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"

        }
        else{
            alert("Unable to Save Data")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
})