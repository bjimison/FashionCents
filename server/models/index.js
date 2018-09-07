const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fashioncents",
  { useNewUrlParser: true }
);

const Post = require("./postSchema");
const User = require("./userSchema");

module.exports = {
  Post: Post,
  User: User
};
