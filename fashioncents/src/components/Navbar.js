import React, { Component } from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Sign up
                    </NavLink>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
