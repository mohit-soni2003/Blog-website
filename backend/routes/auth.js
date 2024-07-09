const express = require("express")
const router = express.Router()
const USERS = require("../models/users")
const bcrypt = require('bcrypt');






// Signup  Route ----------- ------------ ----------- ------------ ------------ ----------

router.get("/signup",(req,res)=>{
    res.json({message:"signup page get request"})
})

router.post("/signup",(req,res)=>{
    const {name , email , username , password} =req.body;
    // check all fields are entered ........
    if(!name , !email , !username , !password ){
        return res.json({error : "Please add all of the fields"})
    }
    // check either user with same email or username should not registered .....
    USERS.findOne({$or : [{email:email}, {username : username}]})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({message : "user with same username or email exists"})
        }

        bcrypt.hash(password,10).then((hashedPassword)=>{
            const user = new USERS({
                name , 
                email,
                username,
                password : hashedPassword,
            })
        
            user.save()
            .then((res)=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
            res.json({message:"signup Successful"})
            
        })

       

    })

   
})

// Signin get Route ----------- ------------ ----------- ------------ ------------ ----------

router.get("/signin",(req,res)=>{
    res.json({message:"signin"})
})

router.post("/signin",(req,res)=>{
    const {email , password} = req.body;

    if(!email , !password){
        return res.status(422).json({error : "Please Add Email and Password"})
    }
    
    USERS.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid Email"})
        }
        bcrypt.compare(password,savedUser.password)
        .then((match)=>{
            if(match){
                return res.status(422).json({message : "Signin Successful"})
            }
            else{
                return res.status(422).json({error : "Invalid Password"})
            }
        })
        .catch(err=>console.log(err))
    })

})

 module.exports=router