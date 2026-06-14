const express=require('express');
require("dotenv").config();
const app=express();
app.get("/",(req,res)=>{
    res.send("Heloo Express");

})

app.get("/about",(req,res)=>{
    res.send("this is the About page");

})

app.get("/contact",(req,res)=>{
    res.send("This is the contact page");

})


const PORT=process.env.PORT|| 3000;

app.listen(PORT,()=>{
    console.log("server is running on the port: ",PORT)
})