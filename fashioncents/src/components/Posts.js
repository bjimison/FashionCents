import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Post from "./Post";

class Posts extends Component {
  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post.id} post={post} delete={this.props.delete} />;
    });

    return (
      <div>
        <div className="posts">{posts}</div>
      </div>
    );
  }
}

export default Posts;
