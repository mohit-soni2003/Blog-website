const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const USERS = require("../models/users");
const Blog = require("../models/blogs");
const requireLogin = require("../middlewares/requireLogin");

router.get("/user/:id", async (req, res) => {
  try {
    const user = await USERS.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const posts = await Blog.find({ author: req.params.id }).populate("author", "_id");
    res.status(200).json({ user, posts });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});
router.get("/userprofile/:id", async (req, res) => {
  try {
    const user = await USERS.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});
router.get("/userposts/:id", async (req, res) => {
  try {
    const posts = await Blog.find({ author: req.params.id }).populate("author", "_id");
    res.status(200).json(posts);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

module.exports = router;
