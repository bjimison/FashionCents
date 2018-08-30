import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Welcome...</h1>
        <div id="search">
          <input type="text" placeholder="Search" />
          <button>
            <Link className="link" to="/createpost">
              Post Your Creation
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
