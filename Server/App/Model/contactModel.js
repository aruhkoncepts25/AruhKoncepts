const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    service:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
        trim:true,
    },
      createdAt: {
    type: Date,
    default: Date.now
  }
});

const contactModel=mongoose.model("Contact",contactSchema);
module.exports=contactModel;