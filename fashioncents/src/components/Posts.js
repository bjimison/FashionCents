import React, { Component } from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";

class Posts extends Component {
  state = {
    post: ""
  };

  render() {
    let posts = this.props.posts.map(post => {
      return (
        <Post
          onSubmit={this.onSubmit}
          fetchPosts={this.fetchPosts}
          editPost={this.props.editPost}
          key={post._id}
          post={post}
          delete={this.props.delete}
        />
      );
    });

    return (
      <div>
        <Sidebar
          getAllPosts={this.props.getAllPosts}
          categorySelect={this.props.categorySelect}
          posts={this.props.posts}
        />
        <div>
          <div className="posts">{posts}</div>
        </div>
      </div>
    );
  }
}

export default Posts;
