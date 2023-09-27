const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://digitalcodehubs:digitalcodehub@cluster0.ggnmjgu.mongodb.net/")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch(()=>{
    console.log("connection failed")
})

const newSchema=new mongoose.Schema({
    email:{
        type:"string",
        require:true
    },
    password:{
        type:"string",
        require:true
    }
})

const collection = mongoose.model("Collection",newSchema)

module.exports=collection