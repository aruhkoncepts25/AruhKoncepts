const express=require("express");
const contactRoute=express.Router();
const {insertUser} =require("../Controller/contactController")

contactRoute.get("/",(req,res)=>{
    res.send("contact Route IS connected")
});

contactRoute.post("/insert",insertUser)




module.exports=contactRoute;