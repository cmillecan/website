const express = require("express");
const router = express.Router();
const Article = require("./../models/article");

router.get("/", async (req, res) => {
  const articles = await Article.find({});

  res.status(200).send(JSON.stringify(articles));
});

router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.sendStatus(404);
    return;
  }

  res.status(200).send(JSON.stringify(article));
});

router.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
  });
  try {
    await article.save();
    res.status(201).send(article.id);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.patch("/:id", async (req, res) => {
  const article = await Article.findById({});
});
// .delete((req, res) => {});

module.exports = router;
