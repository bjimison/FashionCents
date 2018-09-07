import React, { Component } from "react";
import Model from "../models/createPost";
import axios from "axios";

class CreatePost extends Component {
  onSubmit = event => {
    event.preventDefault();
    Model.create({
      title: this.refs.title.value,
      category: this.refs.category.value,
      img: this.refs.img.value,
      description: this.refs.description.value,
      upvotes: 0,
      upvotes_required: parseInt(this.refs.upvotes_required.value),
      username: localStorage.getItem("username")
    }).then(res => {
      this.props.addPost(res.data);
      if (res.status === 404) {
        console.log("request to create post failed");
      }
    });
    axios.get("http://localhost:4000/api/posts/");
    this.props.history.push("/");
  };

  render() {
    return (
      <div id="createpost-container">
        <h1 id="create-title">Share your Design</h1>
        <form className="createForm" onSubmit={this.onSubmit}>
          <div className="form-input">
            <input ref="title" type="text" placeholder="Title" />
            <input ref="category" type="text" placeholder="Category" />
          </div>
          <div className="form-input">
            <input
              ref="img"
              type="text"
              placeholder="Paste image address here"
            />
            <input
              ref="upvotes_required"
              type="text"
              placeholder="Number of Upvotes Desired"
            />
          </div>
          <div className="form-text">
            <textarea placeholder="Description" ref="description" />
            <input className="button" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
