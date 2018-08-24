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
          console.log("error", err);
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
        console.log(err);
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

module.exports = {
  signup: signup,
  login: login
};
