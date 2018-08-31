import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";
import DeletePost from "../models/deletePost";

class Posts extends Component {
  state = {
    posts: [],
    deleted: []
  };

  delete = post_id => {
    console.log("post_title", post_id);
    DeletePost.delete(post_id).then(res => {
      this.setState({ deleted: this.state.deleted.push(res.data) });
    });
  };

  componentDidMount = () => {
    console.log("posts");
    axios.get("http://localhost:4000/api/posts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post.title} post={post} delete={this.delete} />;
    });

    return (
      <div>
        <div className="posts">
          <Post posts={this.props.posts} delete={this.delete} />
        </div>
      </div>
    );
  }
}

export default Posts;
