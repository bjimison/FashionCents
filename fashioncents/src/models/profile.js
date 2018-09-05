import axios from "axios";

class profileModel {
  static profile(user_id) {
    let request = axios.get(
      `http://localhost:4000/api/users/${user_id}`
    );
    return request;
  }
}

export default profileModel;
