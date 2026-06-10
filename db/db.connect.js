require("dotenv").config();

const { default: mongoose } = require("mongoose");
const moongoose=require("mongoose");

const mongoUrl=process.env.MONOGOBD;


const  initializeDatabase=async ()=>{

await mongoose.connect(mongoUrl).then(()=>{
    console.log("Connected to the database");
})
.catch((error)=>{console.log("Error Connecting to Database", error)})



}
 
 

module.exports= {initializeDatabase};