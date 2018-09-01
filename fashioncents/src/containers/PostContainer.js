import React, { Component } from "react";
import Posts from "../components/Posts";

class PostContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Posts delete={this.props.delete} posts={this.props.posts} />
      </div>
    );
  }
}

export default PostContainer;
