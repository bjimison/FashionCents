// post schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let userSchema = new Schema({
  title: String,
  category: String,
  img: String,
  description: String,
  upvotes: Number,
  upvotes_required: Number,
  username: String,
  for_sale: Boolean
});

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
