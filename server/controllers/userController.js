const db = require("../models");

const signup = (req, res) => {
  // create a user based on request body and send it back as JSON
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (foundUser) {
      res.status(400).send("User Already Exists");
    } else {
      db.User.create(req.body, function(err, user) {
        if (err) {
          console.log("error from user create within signup:", err);
        }
        res.status(200).json(user);
      });
    }
  });
};

const login = (req, res) => {
  db.User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, founderUser) => {
      if (err) {
        return err;
      }
      if (founderUser) {
        res.status(200).json(founderUser);
      } else {
        res.status(404).send("User not found");
      }
    }
  );
};

const updateProfile = (req, res) => {
  db.User.findOne({ username: req.params.username }, (err, foundUser) => {
    if (err) {
      console.log("userController.update error", err);
    }
    foundUser.username = req.body.username;
    foundUser.profile_pic = req.body.profile_pic;
    foundUser.email = req.body.email;
    foundUser.save(function(err, savedUser) {
      res.status(200).json(savedUser);
    });
  });
};

const show = (req, res) => {
  db.User.find({ username: req.params.username }, (err, foundUser) => {
    if (err) {
      console.log("Error from profile in user controller:", err);
    }
    res.status(200).json(foundUser);
  });
};

const index = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) res.send(404).json({ message: err });
    res.json(foundUsers);
  });
};

module.exports = {
  index: index,
  signup: signup,
  login: login,
  updateProfile: updateProfile,
  show: show
};
