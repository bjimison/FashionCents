import axios from "axios";

class upvote {
  static getVoteCount(postId, voteCount) {
    let request = axios.put(`http://localhost:4000/api/posts/upvotes/${postId}`, voteCount);
    return request;
  }
}

export default upvote;