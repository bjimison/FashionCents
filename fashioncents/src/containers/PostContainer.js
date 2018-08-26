import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Posts from "../components/Posts";

class PostContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Posts />
      </div>
    );
  }
}

export default PostContainer;
