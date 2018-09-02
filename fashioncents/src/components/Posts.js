import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import axios from "axios";
import Model from "../models/editPost";

class Posts extends Component {
  editPost = event => {
    console.log("event.target.value:", event.target.value);
    axios
      .get(`http://localhost:4000/api/posts/${event.target.value}`)
      .then(res => {
        this.setState({ post: res.data, isEditing: true });
      });
    console.log("event.target.value:", event.target.value);
  };

  fetchPosts = event => {
    axios
      .get(`http://localhost:4000/api/posts/${event.target.value}`)
      .then(res => {
        this.setState({ post: res.data });
        console.log(this.state.post);
      });
  };

  onSubmit = event => {
    event.preventDefault();
    let username = localStorage.getItem("username");
    // let postId = this.props.match.params.post_id;
    let postId = this.state.post._id;
    let postData = {
      title: this.refs.title.value,
      category: this.refs.category.value,
      img: this.refs.img.value,
      description: this.refs.description.value,
      upvotes_required: parseInt(this.refs.upvotes_required.value),
      username: username
    };
    console.log("onSubmit: postData=", postData, "postId: ", postId);
    Model.edit(postData, postId)
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    let posts = this.props.posts.map(post => {
      return (
        <Post
          value={post._id}
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
    );
  }
}

export default Posts;
