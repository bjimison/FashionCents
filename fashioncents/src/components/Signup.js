import React, { Component } from "react";
import Model from "../models/signup.js";

class Signup extends Component {
  onSubmit = event => {
    event.preventDefault();
    if (this.refs.password.value === this.refs.confirmpassword.value) {
      Model.signup(this.refs.username.value, this.refs.password.value)
        .then(res => {
          console.log("Response from signup: ", res.data);
          if (res.status === 404) {
            console.log("request failed from signup");
          }
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("password", res.data.password);
          console.log(
            "local storage set for UN and PW:",
            res.data.username,
            res.data.password
          );
          this.props.setAuth(res.data.username);
          this.props.history.push("/profile");
        })
        .catch(err => {
          console.log("In Catch from signup", err);
          document.getElementById("exists").style.display = "inline";
        });
    } else {
      console.log("passwords do not match");
    }
  };

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <p id="exists">
          This Username already exists. Please select another one.
        </p>
        <form onSubmit={this.onSubmit} className="registerForm">
          <input type="text" ref="username" placeholder="Username" />
          <input type="text" ref="password" placeholder="Password" />
          <input
            type="text"
            ref="confirmpassword"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
