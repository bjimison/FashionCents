import React, { Component } from "react";
import Model from "../models/login";

class Login extends Component {
  onSubmit = event => {
    event.preventDefault();
    Model.login(this.refs.username.value, this.refs.password.value).then(
      res => {
        if (res.status === 404) {
          console.log("request from login failed");
        }
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("password", res.data.password);
        console.log("RESPONSE:", res.data.username, res.data._id);
        this.props.setAuth(res.data.username, res.data.password);
        this.props.history.push("/profile");
      }
    );
  };

  render() {
    return (
      <div>
        <div className="Login">
          <h2>Login</h2>
          <form onSubmit={this.onSubmit} className="registerForm">
            <input type="text" ref="username" placeholder="Username" />
            <input type="text" ref="password" placeholder="Password" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
