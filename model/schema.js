const mongoose=require("mongoose")
let authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }

})
let authmodelschema=new mongoose.model("auth",authSchema)
module.exports=authmodelschema
