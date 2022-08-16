const express =require("express");
const path = require("path");
require("./db/conn");
const app=express();
const port=process.env.PORT || 3000;

//setting paths
const static_path=path.join("__dirname","../public");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(static_path))


app.set("view engine","hbs");
//routing
// app.get(path,callback)

app.get("/",(req,res)=>{
    res.render('index');
})
//server create
app.listen(port,()=>{
    console.log(`hii aim ${port}`)
});