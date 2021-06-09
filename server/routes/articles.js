const express = require("express");
const router = express.Router();
const Article = require("./../models/article");
const {isEmpty} = require("lodash");

// get all articles
router.get("/", async (req, res) => {
  const articles = await Article.find({});

  res.status(200).send(JSON.stringify(articles));
});

// get article by id
router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.sendStatus(404);
    return;
  }

  res.status(200).send(JSON.stringify(article));
});

// create article
router.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    imageURL: req.body.imageURL
  });
  try {
    await article.save();
    res.status(201).send(article.id);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// update article
router.patch("/:id", async (req, res) => {
  const body = req.body
  if (!body) {
    res.sendStatus(400)
    return
  }

  // might need to check if these are set and either exclude or provide defaults
  const update = {}
  if (body.description) update.description = body.description
  if (body.content) update.content = body.content
  if (body.title) update.title = body.title
  if (body.imageURL) update.imageURL = body.imageURL

  if(isEmpty(update)) {
    res.sendStatus(404)
    return
  }

  try {
    await Article.findOneAndUpdate({ _id: req.params.id}, update)
  } catch (e) {
    console.error(e)
    // not sure if 404 is appropriate here, might need better err handling
    res.sendStatus(404)
  }

  res.sendStatus(200)
});

// delete article
router.delete("/:id", async (req, res) => {
  const article = await Article.findOneAndDelete(req.params.id);
  if (!article) {
    res.sendStatus(404);
    return;
  }

  return res.status(200).json({ success: true, data: article })
});


module.exports = router;
