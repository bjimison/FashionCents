import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "./ShowPost";

class Posts extends Component {
  render() {
    return (
      <div className="homepage-post">
        <img src="#" />
        <p>Description</p>
        <i>Icon</i>
        <button>
          <Link className="link" to="ShowPost">
            View Post
          </Link>
        </button>
      </div>
    );
  }
}

export default Posts;
