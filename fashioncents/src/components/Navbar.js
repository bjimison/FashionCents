import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import SignupModel from "../models/signup.js";

class Navbar extends Component {
  state = {
    loginmodalIsOpen: false,
    signupmodalIsOpen: false
  };

  //   Modal.setAppElement('#login-modal');

  customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.refs.password.value === this.refs.confirmpassword.value) {
      SignupModel.signup(this.refs.username.value, this.refs.password.value)
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
          this.closesignupModal();
          //   this.props.history.push("/profile");
        })
        .catch(err => {
          console.log("In Catch from signup", err);
          document.getElementById("exists").style.display = "inline";
        });
    } else {
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
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="collapese navbar-collapse" id="navigation">
            {this.props.auth ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    FashionCents
                  </NavLink>
                </li>
                <div id="login">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
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
                    FashionCents
                  </NavLink>
                </li>
                <div id="login">
                  <li id="login-modal" className="nav-item">
                    <button onClick={this.openloginModal} className="nav-link">
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={this.opensignupModal} className="nav-link">
                      Sign up
                    </button>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.loginmodalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeloginModal}>close</button>
          <div>modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <Modal
          ariaHideApp={false}
          id="signup-modal"
          isOpen={this.state.signupmodalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Sign Up</h2>
          <button onClick={this.closesignupModal}>close</button>
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
        </Modal>
      </div>
    );
  }
}

export default Navbar;
