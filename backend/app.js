const router = require("./routes/auth")
const express = require("express")
const app = express();
const port = 8080;
const mongoose = require("mongoose")
const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(url)
mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on("error",()=>{console.log("Not Connected To Database......")})

app.use(express.json())  // parse the json data comming from post request 
app.use(router)

app.get("/",(req,res)=>{
    res.send("hello Server is ready")
})

app.listen(port, ()=>{
    console.log("Server is listening......")
})