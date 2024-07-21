const mongoose = require("mongoose")
const { Schema } = mongoose;
const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required:true
    },
    description : {
        type : String,
        required:true
    },
    content : {
        type : String,
        required:true
    },
    image : {
        type : String,
        required:true
    },
    author : {
        type : Schema.Types.ObjectId,
         ref: 'USERS',
        required:true,
    },
    views : {
        type : String,
    },
    categories:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Blog",blogSchema)