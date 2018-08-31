import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import PostContainer from "../containers/PostContainer";
import Posts from "./Posts";

class Homepage extends Component {
  render() {
    return (
      <div>
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
        <PostContainer />
      </div>
    );
  }
}

export default Homepage;
