import db from "../models";

// POST /api/user
const signup = (req, res) => {
  // create a user based on request body and send it back as JSON
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (foundUser) {
      console.log("User Already Exists:", foundUser);
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
        console.log("error from login findOne:", err);
      }
      if (founderUser) {
        console.log("In Login If statement:", founderUser);
        res.status(200).json(founderUser);
      } else {
        res.status(404).send("User not found");
      }
    }
  );
};

function updateProfile(req, res) {
  db.User.findOne({ username: req.params.user_id }, function(err, foundUser) {
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
}

module.exports = {
  signup: signup,
  login: login,
  updateProfile: updateProfile
};
