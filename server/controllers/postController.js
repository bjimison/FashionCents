import db from "../models";

const create = (req, res) => {
  db.Post.create(req.body, (err, newPost) => {
    if (err) {
      console.log("Error from create Post:", err);
      //   ???? Redirect to empty Form ????
    }
    console.log("NEWPOST: ", newPost);
    res.json(newPost);
  });
};

// GET /api/user
const index = (req, res) => {
  // access database and pull out all posts
  db.Post.find({}, (err, allPosts) => {
    if (err) {
      console.log("error from post index:", err);
    }
    res.json(allPosts);
  });
};

const show = (req, res) => {
  db.Post.findOne({ title: req.params.title }, (err, post) => {
    if (err) {
      console.log("Error from show function in postcontroller:", err);
    }
    res.status(200).json(post);
  });
};

module.exports = {
  create: create,
  index: index,
  show: show
};
