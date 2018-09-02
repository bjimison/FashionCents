const db = require("../models");

const create = (req, res) => {
  db.Post.create(req.body, (err, newPost) => {
    if (err) {
      console.log("Error from create Post:", err);
    }
    console.log("NEWPOST: ", newPost);
    res.json(newPost);
  });
};

// GET
const index = (req, res) => {
  db.Post.find({}, (err, allPosts) => {
    if (err) {
      console.log("error from post index:", err);
    }
    res.json(allPosts);
  });
};

const show = (req, res) => {
  db.Post.findOne({ _id: req.params._id }, (err, post) => {
    if (err) {
      console.log("Error from show function in postcontroller:", err);
    }
    res.status(200).json(post);
  });
};

const getByCategory = (req, res) => {
  db.Post.findOne({ category: req.params.category }, (err, posts) => {
    if (err) {
      console.log("error from getByCategory in post contoller:", err);
    }
    res.status(200).json(posts);
  });
};

const getByDate = (req, res) => {
  db.Post.find({ date: req.params.date }, (err, posts) => {
    if (err) {
      console.log("error from getByDate in post contoller:", err);
    }
    res.status(200).json(posts);
  });
};

const destroy = (req, res) => {
  db.Post.findByIdAndRemove(req.params.post_id, (err, deletedPost) => {
    if (err) {
      console.log("userController.update error", err);
    }
    console.log("Post Deleted: ", deletedPost);
    res.status(200).json(deletedPost);
  });
};

const edit = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.post_id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) throw err;
      res.json(updatedPost);
    }
  );
};

module.exports = {
  create: create,
  index: index,
  show: show,
  getByCategory: getByCategory,
  getByDate: getByDate,
  destroy: destroy,
  edit: edit
};
