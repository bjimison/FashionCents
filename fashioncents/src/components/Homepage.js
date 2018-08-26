import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import CreatePost from "./CreatePost";
import PostContainer from "../containers/PostContainer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <div id="search">
          <input type="text" placeholder="   Search" />
          <button>
            <Link className="link" to="CreatePost">
              Post Your Creation
            </Link>
          </button>
        </div>
        <PostContainer />
      </div>
    );
  }
}

export default Homepage;
