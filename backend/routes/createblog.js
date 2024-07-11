const express = require("express")
const router = express.Router()
const Blog = require("../models/blogs")

router.get("/createblog", (req, res) => {
    res.json({ message: "create blog get route" })
})
router.post("/createblog", (req, res) => {
    const { title, description, content, image, like, author, views, categories } = req.body;
    if (!categories){
        return res.json({ error: "pleaase choose categories" })
    }
    if (!title,!description,!content,!image){
        return res.json({ error: "pleaase add all the fields" })
    }
    console.log(title, description, content, image, like, author, views, categories)
    const blog = new Blog({
        title: title,
        description: description,
        content: content,
        image: image,
        like: "0",
        author: author,
        views: "0",
        categories: categories,
    })

    blog.save()
    .then((result)=>{
        if(result){
        return res.json({message:" Successfully Blog Posted"})
    }
    else{
            return res.json({error:"Some error occured while saving"})
            
        }
    })
    .catch(err=>console.log(err))
    
    
})

module.exports = router 