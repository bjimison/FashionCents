import axios from "axios";

class getPosts {
  static getAll(data) {
    let request = axios.get("http://localhost:4000/api/posts/");
    return request;
  }
}

export default getPosts;
