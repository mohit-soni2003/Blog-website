const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Blog = require("../models/blogs");
const requireLogin = require("../middlewares/requireLogin");


router.get("/createblog", requireLogin, (req, res) => {
    res.json({ message: "create blog get route" })
});

router.get("/allblogs", async (req, res) => {
    try {
        let data = await Blog.find({}).populate('author');
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "error in Fetching BLogs" });
    }
});
router.get("/myblogs", requireLogin, async (req, res) => {
    try {
        const myblogs = await Blog.find({ author: req.user._id }).populate('author');
        if (myblogs.length === 0) {
          return res.json({ message: 'No blogs found for this user.' });
        }
        res.json(myblogs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
      }
});


router.get("/categories/:category", async (req, res) => {
    const category = req.params.category;

    try {
        let data = await Blog.find({ categories: category });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let data = await Blog.findById(id)
        res.json(data)
    }
    catch {
        res.status(500).json({ error: "some errror occured" });
    }
})


router.post("/createblog", requireLogin, (req, res) => {
    const { title, description, content, image, like, author, views, categories } = req.body;
    if (!categories) {
        return res.json({ error: "pleaase choose categories" })
    }
    if (!title, !description, !content, !image) {
        return res.json({ error: "pleaase add all the fields" })
    }
    console.log(title, description, content, image, like, author, views, categories)
    const blog = new Blog({
        title: title,
        description: description,
        content: content,
        image: image,
        like: "0",
        author: req.user,
        views: "0",
        categories: categories,
    });

    blog.save().then((result) => {
        if (result) {
            return res.json({ message: " Successfully Blog Posted" })
        }
        else {
            return res.json({ error: "Some error occured while saving" })

        }
    })
        .catch(err => console.log(err))
});


router.put("/like", requireLogin, async (req, res) => {
    try {
        const result = await Blog.findByIdAndUpdate(
            req.body.blogid,
            { $push: { likes: req.user._id } },
            { new: true }
        );
        console.log(result)
        res.json(result);
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
});
router.put("/unlike", requireLogin, async (req, res) => {
    try {
        const result = await Blog.findByIdAndUpdate(
            req.body.blogid,
            { $pull: { likes: req.user._id } },
            { new: true }
        );
        console.log(result)
        res.json(result);
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
});

module.exports = router;

