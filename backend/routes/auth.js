const express = require("express")
const router = express.Router()
const USERS = require("../models/users")
const bcrypt = require('bcrypt');
const {jwt_secret} = require("../keys")
const jwt = require("jsonwebtoken")
const requireLogin = require("../middlewares/requireLogin")







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
    const {username , password} = req.body;

    if(!username , !password){
        return res.status(422).json({error : "Please Add Email and Password"})
    }
    
    USERS.findOne({username:username})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid username"})
        }
        bcrypt.compare(password,savedUser.password)
        .then((match)=>{
            if(match){
                const token = jwt.sign({_id : savedUser.id},jwt_secret)
                const {_id,name , email , username , password , photo } = savedUser
                console.log({message : "Signin Successful",token:token, user : {_id,name,username,email,password,photo}})
                return res.status(422).json({message : "Signin Successful",token:token, user : {_id,name,username,email,password,photo}})
            }
            else{
                return res.status(422).json({error : "Invalid Password"})
            }
        })
        .catch(err=>console.log(err))
    })

})
router.get("/myprofile",requireLogin,(req,res)=>{
    const profile_data = req.user;
    console.log(profile_data)
    res.json(profile_data)
})

router.put("/uploadprofilepic",requireLogin,async (req,res)=>{
    try {
        const updatedUser = await USERS.findByIdAndUpdate(
            req.user._id,
            { $set: { photo: req.body.photo } },
            { new: true } // This option returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
 module.exports=router;

