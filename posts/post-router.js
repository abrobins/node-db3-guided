const express = require("express");
const postModel = require("./posts-model");

const router = express.Router({
  mergeParams: true // because express doesn't pass params from parent router to child router
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await postModel.findByUserId(req.params.id);
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
