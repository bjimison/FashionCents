import axios from "axios";

class profileModel {
  static profile(username) {
    console.log("profile", username);
    let request = axios.get(
      `http://localhost:4000/api/users/${username}/profile`
    );
    return request;
  }
}

export default profileModel;
