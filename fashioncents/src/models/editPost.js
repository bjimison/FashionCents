import axios from "axios";

class editPost {
  static edit(userPost, postId) {
    console.log("MODEL = ", userPost, postId);
    let request = axios.put(
      `http://localhost:4000/api/posts/${postId}`,
      userPost
    );
    return request;
  }
}

export default editPost;
