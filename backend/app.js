const express = require("express")
const app = express();
const port = 8080;
const router = express.Router() 

app.get("/",(req,res)=>{
    res.send("hello Server is ready")
})

app.listen(port, ()=>{
    console.log("Server is listening......")
})