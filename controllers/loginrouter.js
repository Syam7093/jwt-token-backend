const express=require("express")
const router=express.Router()
const authmodelschema=require("../model/schema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const some=some;


const jwt_secreat="onpassive"
router.post("/login",async(req,res)=>{
    
    try{
        let data=await authmodelschema.findOne({email:req.body.email})
        console.log(data)
        await bcrypt.compare(req.body.password, data.password);
        if(await bcrypt.compare(req.body.password, data.password) )
   
            {
                const token=jwt.sign({data:data},jwt_secreat);
                res.json({
                    
                     data:token,
                    isLogin:true,
                    msg:"user login successfully."
                })
            }
            else{
                res.json({
                    isLogin:false,
                    msg:"please enter valid username or password"
                })
            }
            console.log(req.body)
        
    }
    catch(error)
    {
        console.log("error:",error.message)
    }

    

})

router.post('/tockencheck',async(req,res)=>{
    console.log(req.body,'hhh')
    try{
     const tocken= JSON.stringify(req.body.token)
     console.log(tocken,'ffffffff')
     const data = await jwt.verify(req.body.token,jwt_secreat);
     console.log(data,'ddddddddddd')
     res.json({data:data,status:true});
    }catch(error){
     res.json({status:'err',error:error});
    }
})
module.exports=router