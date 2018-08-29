import axios from "axios";

class editPost {
  static edit(post) {
    let request = axios.put(
      `http://localhost:4000/api/posts/${post.title}/edit`,
      post
    );
    return request;
  }
}

export default editPost;
