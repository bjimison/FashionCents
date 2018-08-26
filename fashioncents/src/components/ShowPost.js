import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="post-detail">
          <h3 id="title">Post 1</h3>
          <h5 id="category">Category</h5>
        </div>
        <div className="post-detail">
          <h5 id="creator">Created By</h5>
          <h5 id="upvotes">Upvotes needed for production</h5>
        </div>
        <div className="post-description">
          <img src="#" />
          <p>Description</p>
          <i>Icon</i>
        </div>
      </div>
    );
  }
}

export default Post;
