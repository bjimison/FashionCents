import axios from "axios";

class getPostByCategory {
  static getCategory(post_category) {
    let request = axios.get(
      `http://localhost:4000/api/posts/category/${post_category}`
    );
    return request;
  }
}

export default getPostByCategory;
