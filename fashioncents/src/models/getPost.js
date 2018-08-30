import axios from "axios";

class getPost {
  static getOne(postId) {
    let request = axios.get(`http://localhost:4000/api/posts/${postId}`);
    return request;
  }
}

export default getPost;
