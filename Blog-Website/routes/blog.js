const express = require("express");
const db = require("../data/database");
const mongodb = require("mongodb");
const objectId = mongodb.ObjectId;
const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const posts = await db
    .getDb()
    .collection("posts")
    .find({}, { title: 1, summary: 1, "author.name": 1 })
    .toArray();
  res.render("posts-list", { posts: posts });
});

router.get("/new-post", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray();
  // console.log(authors);
  res.render("create-post", { authors: authors });
});
router.post("/posts", async function (req, res) {
  const authorId = new objectId(req.body.author);
  const author = await db
    .getDb()
    .collection("authors")
    .findOne({ _id: authorId });
  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };
  const result = await db.getDb().collection("posts").insertOne(newPost);
  // console.log(result);
  res.redirect("/posts");
});

router.get("/posts/:id", async function (req, res) {
  const postId = req.params.id;
  const post = await db
    .getDb()
    .collection("posts")
    .findOne({ _id: new objectId(postId) }, { summary: 0 });
  res.render("post-detail", { post: post });
});
router.get("/posts/:id/edit", async function (req, res) {
  const postId = req.params.id;
  const post = await db
    .getDb()
    .collection("posts")
    .findOne({ _id: new objectId(postId) }, { summary: 1, title: 1, body: 1 });
  res.render("update-post", { post: post });
});
router.post("/posts/:id/edit", async function (req, res) {
  const postId = new objectId(req.params.id);
  const result = await db
    .getDb()
    .collection("posts")
    .updateOne(
      { _id: postId },
      {
        $set: {
          title: req.body.title,
          summary: req.body.summary,
          body: req.body.content,
        },
      }
    );
  res.redirect("/posts");
});
router.post("/posts/:id/delete", async function (req, res) {
  const postId = new objectId(req.params.id);
  const result = await db
    .getDb()
    .collection("posts")
    .deleteOne({ _id: postId });
  res.redirect("/posts");
});
module.exports = router;
