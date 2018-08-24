import axios from "axios";

class login {
  static login(username, password) {
    let request = axios.post("http://localhost:4000/api/users/login", {
      username: username,
      password: password
    });
    return request;
  }
}

export default login;
