const { error } = require("console")
const fs =require("fs")

//write file

//fs.writeFile("message.txt","have a good day",(error)=>{
//    if(error){
//        console.log("unable to write");
//    }
//})


//append file

//fs.appendFile("message.txt", " have a good year......",(error)=>{
//    if(error){
//        console.log("unable to write");
//    }
//})

//read file

//fs.readFile("message.txt","utf-8",(error,data)=>{
//    if(error){
//        console.log("unable to write");
//    }
//    else{
//        console.log(data);
//    }
//})


//delete file


//fs.unlink("message.txt",(error)=>{
//    if(error){
//        console.log("unable to delete");
//    }
//})


//create folder

//fs.mkdir("jerike",(error)=>{
//    if(error){
//        console.log("unable to delete");
//    }
//})

//fetch


fs.readdir("jerike",(error,data) => {
    if(error){
        console.log("unable to create folder");
    }
    else{
        console.log(data);
    }
})
