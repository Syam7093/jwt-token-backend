const express=require("express")
const router=express.Router()
const authmodelschema=require("../model/schema")
const multer=require("multer")
const bcrypt=require("bcrypt")



router.post("/signup",multer().none(),async(req,res)=>{
    console.log(req.body)
    const encryptedpassword=await bcrypt.hash(req.body.password,10)
    let data = new authmodelschema({
        name:req.body.name,
        email:req.body.email,
        password:encryptedpassword
    })
    
    try{
        await authmodelschema.create(data)
        console.log(data)
        res.json({
            data:data,
            msg:"added successfully.."
        })
    }
    catch(error){
        res.json({
            msg:"user alredy registered"
        })
    }
    

})
module.exports=router