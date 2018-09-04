import React, { Component } from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";


class Posts extends Component {
  state = {
    post: ""
  };

  editPost = event => {
    console.log("event.target.value:", event.target.value);
    axios
      .get(`http://localhost:4000/api/posts/${event.target.value}`)
      .then(res => {
        this.setState({ post: res.data, isEditing: true });
      });
    console.log(
      "event.target.value:",
      event.target.value,
      "post:",
      this.state.post
    );
  };

  fetchPosts = event => {
    axios
      .get(`http://localhost:4000/api/posts/${event.target.value}`)
      .then(res => {
        this.setState({ post: res.data });
        console.log(this.state.post);
      });
  };

  render() {
    let posts = this.props.posts.map(post => {
      return (
        <Post
          onSubmit={this.onSubmit}
          fetchPosts={this.fetchPosts}
          editPost={this.editPost}
          key={post._id}
          post={post}
          delete={this.props.delete}
        />
      );
    });

    return (
      <div>
      <Sidebar />
      <div id="main-content">
        <div id="search">
          <input type="text" placeholder="Search" />
          {this.props.username ? (
            <button>
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
