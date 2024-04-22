// const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const connectionDB = require("./database/db")
const signuprouter=require("./controllers/signuprouter")
const loginrouter=require("./controllers/loginrouter")

const multer=require("multer")

const app=express()
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())


connectionDB()

app.use("/signup",signuprouter);
app.use("/login",loginrouter)


app.listen(8765,()=>{
        console.log("port number running...")
})
