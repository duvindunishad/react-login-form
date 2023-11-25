const express = require('express');
const collection = require("./mongo")
const cors = require('cors')    
const backend = express()
backend.use(express.json())
backend.use(express.urlencoded({extended:true}))
backend.use(cors())

backend.get("/",cors(),(req,res)=>{

})

backend.post("/",async(req,res)=>{
    const{name,email,password} = req.body

    try {
        const check=await collection.findOne({ name:name, email:email ,password:password})
        if(check){
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    } catch (e) {
        res.json("notexist")
    }
})

// signup
backend.post("/signup",async(req,res)=>{
    const{name,email,password} = req.body

    const data={name:name,email:email,password:password}
    try {
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e) {
        res.json("notexist")
    }
})

backend.listen(8000,()=>{
    console.log("port connected")
})