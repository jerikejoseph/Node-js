const express=require('express');

//const bodyParser=require('body-parser')
const app=express()
const path=require("path");
const { default: Connection } = require('./connection');
const { error } = require('console');
const PORT=3000
//app.use(express.static("pages"))
app.use(express.json());
//app.use(bodyParser.json());

//app.get("/",(req,res)=>{
 //   res.send("hello world")
 //console.log(__dirname);
 //res.sendFile(pathe.join(__dirname,"pages","index.html"))
//})
//app.post("/about",(req,res)=>{
//    res.status(200)
//})
//app.get("/",Token,(req,res)=>{
//    console.log("router");
//    res.send("hello world")
//})

//app.get("/about/:id1/:id2",(req,res)=>{
//    const {id1,id2}=req.params
//    console.log(id1,id2);
//    res.send("hello world")
//})


app.get("/about",(req,res)=>{
    const {name,age,gender}=req.query;
    console.log(name,age,gender);
    res.send("hello world")
})


app.get("*",(req,res)=>{
    res.status(404).send("invalid page")
})

//function Token(res,req,next) {
//    console.log("middle ware");
//    next()
//    
//}

Connection().then(()=>{
    console.log("database connected");
    app.listen(PORT,()=>{
        console.log(`server started at http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})




//app.listen(PORT,()=>{
//    console.log(`server started at http://localhost:${PORT}`)
//})