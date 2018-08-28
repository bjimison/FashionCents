import axios from "axios";

class deletePost {
  static delete(post_title) {
    let request = axios.delete(`http://localhost:4000/api/posts/${post_title}`);
    console.log(request);
    return request;
  }
}

export default deletePost;
