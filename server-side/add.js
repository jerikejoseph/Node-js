const app=express()
import express from "express"
import Connection from "./connection.js"
const PORT=3000
Connection().then(()=>{
    console.log("database connected");
    app.listen(PORT,()=>{
        console.log(`server connected at http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})