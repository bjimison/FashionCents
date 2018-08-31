import axios from "axios";

class deletePost {
  static delete(post_id) {
    let request = axios.delete(`http://localhost:4000/api/posts/${post_id}`);
    return request;
  }
}

export default deletePost;
