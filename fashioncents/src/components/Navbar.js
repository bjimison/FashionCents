import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import SignupModel from "../models/signup.js";
import LoginModel from "../models/login.js";

class Navbar extends Component {
  state = {
    loginmodalIsOpen: false,
    signupmodalIsOpen: false
  };

  customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "50%",
      border: "3px solid #ad0016",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  };

  onSubmitLogin = event => {
    event.preventDefault();
    LoginModel.login(this.refs.username.value, this.refs.password.value).then(
      res => {
        if (res.status === 404) {
          console.log("request from login failed");
        } else if (this.refs.password.value !== res.data.password) {
          document.getElementById("exists").style.display = "inline";
        } else {
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("userId", res.data._id);
          this.props.setAuth(res.data.username, res.data._id);
          this.closeloginModal();
        }
        setTimeout(() => {
          if (this.state.loginmodalIsOpen === true) {
            document.getElementById("exists").style.display = "inline";
          }
        }, 100);
      }
    );
  };

  onSubmitSignup = event => {
    event.preventDefault();
    if (this.refs.password.value === this.refs.confirmpassword.value) {
      SignupModel.signup(this.refs.username.value, this.refs.password.value)
        .then(res => {
          console.log("Response from signup: ", res.data);
          if (res.status === 404) {
            console.log("request failed from signup");
            document.getElementById("match").style.display = "inline";
          }
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("userId", res.data._id);
          this.props.setAuth(res.data.username, res.data._id);
          this.closesignupModal();
        })
        .catch(err => {
          document.getElementById("match").style.display = "inline";
        });
    } else {
      document.getElementById("match").style.display = "inline";
      console.log("passwords do not match");
    }
  };

  openloginModal = () => {
    this.setState({ loginmodalIsOpen: true });
  };

  closeloginModal = () => {
    this.setState({ loginmodalIsOpen: false });
  };

  opensignupModal = () => {
    this.setState({ signupmodalIsOpen: true });
  };

  closesignupModal = () => {
    this.setState({ signupmodalIsOpen: false });
  };

  render() {
    // let user_id = this.props.match.params.user_id;

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="collapse navbar-collapse" id="navigation">
            {this.props.auth ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    <i className="fas fa-child" />
                    FashionCents
                  </NavLink>
                </li>
                <div id="login">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={`/user/${localStorage.getItem("username")}`}
                    >
                      Hello, {this.props.username}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" onClick={this.props.logout}>
                      Logout
                    </span>
                  </li>
                </div>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    <i className="fas fa-child" />
                    FashionCents
                  </NavLink>
                </li>
                <div id="login">
                  <li id="login-modal" className="nav-item">
                    <button
                      id="login-button"
                      onClick={this.openloginModal}
                      className="nav-link"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      id="signup-button"
                      onClick={this.opensignupModal}
                      className="nav-link"
                    >
                      Sign up
                    </button>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>
        <Modal
          style={this.customStyles}
          ariaHideApp={false}
          isOpen={this.state.loginmodalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Login</h2>
          <p id="exists">Login Failed, please try again.</p>
          <form onSubmit={this.onSubmitLogin} className="registerForm">
            <div className="modal-inputs">
              <input
                className="modal-input"
                type="text"
                ref="username"
                placeholder="Username"
              />
              <input
                className="modal-input"
                type="password"
                ref="password"
                placeholder="Password"
              />
              <input className="modal-submit" type="submit" value="Submit" />
            </div>
          </form>
          <button
            id="login-close"
            className="modal-close"
            onClick={this.closeloginModal}
          >
            close
          </button>
        </Modal>
        <Modal
          style={this.customStyles}
          ariaHideApp={false}
          id="signup-modal"
          isOpen={this.state.signupmodalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Sign Up</h2>
          <form
            id="signup-modal"
            onSubmit={this.onSubmitSignup}
            className="registerForm"
          >
            <p id="match">Passwords do not match</p>
            <input
              className="modal-input"
              type="text"
              ref="username"
              placeholder="Username"
            />
            <input
              className="modal-input"
              type="password"
              ref="password"
              placeholder="Password"
            />
            <input
              className="modal-input"
              type="password"
              ref="confirmpassword"
              placeholder="Confirm Password"
            />
            <input className="modal-submit" type="submit" value="Submit" />
          </form>
          <button className="modal-close" onClick={this.closesignupModal}>
            close
          </button>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
