import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
// import LoginModal from "./LoginModal";

class Navbar extends Component {
  state = {
    loginmodalIsOpen: false,
    signupmodalIsOpen: false
  };

  // Modal.setAppElement("#login-modal");

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
          id="signup-modal"
          isOpen={this.state.signupmodalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closesignupModal}>close</button>
          <div>modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
