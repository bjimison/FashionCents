import axios from "axios";

class createPost {
  static create(data) {
    let request = axios.post("http://localhost:4000/api/posts/create", data);
    return request;
  }
}

export default createPost;
