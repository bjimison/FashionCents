// post schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: String,
  category: String,
  img: String,
  description: String,
  upvotes: Number,
  upvotes_required: Number,
  username: String,
  for_sale: Boolean,
  date: String
});

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
