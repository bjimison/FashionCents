// user schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  profile_pic: String,
  email: String
});

let User = mongoose.model("User", userSchema);

module.exports = User;
