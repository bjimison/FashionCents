import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Posts from "../components/Posts";
import DeletePost from "../models/deletePost";
import Model from "../models/getPosts";
import axios from "axios";

class PostContainer extends Component {
  state = {
    posts: [],
    deleted: []
  };

  componentDidMount = () => {
    console.log("postcontainer");
    axios.get("http://localhost:4000/api/posts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  render() {
    return (
      <div className="main-container">
        <Posts
          delete={this.delete}
          posts={this.state.posts}
          deleted={this.state.deleted}
        />
      </div>
    );
  }
}

export default PostContainer;
