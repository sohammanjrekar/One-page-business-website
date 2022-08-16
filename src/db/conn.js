const mongoose=require("mongoose");

// creating a database
mongoose.connect("mongodb://localhost:27017/soham",{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("connection  success")
}).catch((error)=>{
console.log(`hii ${error}`)
})