import axios from "axios";

class editPost {
  static edit(postData, postId) {
    console.log("MODEL = ", postData, postId);
    let request = axios.put(
      `http://localhost:4000/api/posts/${postId}`,
      postData
    );
    return request;
  }
}

export default editPost;
