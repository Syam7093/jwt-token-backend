const mongoose=require("mongoose")
let connectionDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/authentication")
        console.log("connected to database")
    }
    catch(error)
    {
        console.log("something went wrong...",error)
    }
}
module.exports=connectionDB