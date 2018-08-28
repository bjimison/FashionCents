import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Post from "./Post";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    axios.get("http://localhost:4000/api/posts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post.title} post={post} delete={this.props.delete} />;
    });

    return (
      <div>
        <div className="posts">
          <Post posts={this.props.posts} />
        </div>
      </div>
    );
  }
}

export default Posts;
