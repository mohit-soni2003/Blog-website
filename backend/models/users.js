const mongoose = require("mongoose")
const userSchema =new  mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    username :{
        type  :String,
        required : true
    },
    email :{
        type  :String,
        required : true
    },
    password :{
        type  :String,
        required : true
    },
    photo:{
        type : String,
        default: "https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays-thumbnail.png"
    },
})

module.exports = mongoose.model("USERS",userSchema)