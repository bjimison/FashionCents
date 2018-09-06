import React, { Component } from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";


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
      <Sidebar getAllPosts={this.props.getAllPosts} categorySelect={this.props.categorySelect} posts={this.props.posts} />
      <div id="main-content">
        <div className="search">
          {this.props.username ? (
            <button id="search-button">
              <Link className="link" to="/createpost">
                Post Your Creation
              </Link>
            </button>
          ) : null}
        </div>
        <div>
          <div className="posts">{posts}</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Posts;
