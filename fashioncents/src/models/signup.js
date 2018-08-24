import axios from "axios";

class signupModel {
  static signup(username, password) {
    console.log("signup", username, password);
    let request = axios.post("http://localhost:4000/api/users/signup", {
      username: username,
      password: password
    });
    return request;
  }
}

export default signupModel;
