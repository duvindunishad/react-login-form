const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://digitalcodehubs:digitalcodehubs@cluster0.gsi8wfe.mongodb.net/")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch(()=>{
    console.log("connection failed")
})

// try {
//      console.log("mongodb connected successfully")

    
// } catch (error) {
//     console.log("connection failed")
// }

const newSchema=new mongoose.Schema({
    name:{
        type:"string",
        require:true
    },
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