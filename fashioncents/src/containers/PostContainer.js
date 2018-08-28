import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Posts from "../components/Posts";
import DeletePost from "../models/deletePost";
import axios from "axios";

class PostContainer extends Component {
  state = {
    posts: [],
    deleted: []
  };

  componentDidMount = () => {
    axios.get("http://localhost:4000/api/posts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  delete = event => {
    console.log("post_title", event.target.value);
    DeletePost.delete(event.target.value).then(res => {
      this.setState({
        deleted: this.state.deleted.push(res)
      });
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
