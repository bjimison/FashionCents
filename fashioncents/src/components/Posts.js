import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Post from "./Post";

class Posts extends Component {
  render() {
    return (
      <div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
        <div className="posts">
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
