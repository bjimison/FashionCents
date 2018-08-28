import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../models/createPost";

class CreatePost extends Component {
  onSubmit = event => {
    event.preventDefault();
    Model.create({
      title: this.refs.title.value,
      category: this.refs.category.value,
      img: this.refs.img.value,
      description: this.refs.description.value,
      upvotes: 0,
      upvotes_require: this.refs.upvotes_required.value,
      username: this.props.username
    }).then(res => {
      if (res.status === 404) {
        console.log("request to create post failed");
      }
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.onSubmit}>
          <input ref="title" valuetype="text" placeholder="Title" />
          <input ref="category" type="text" placeholder="Category" />
          <input ref="img" type="text" placeholder="Paste image address here" />
          <input
            ref="upvotes_required"
            type="text"
            placeholder="Enter the number of Upvotes desired to Create"
          />
          <textarea placeholder="Description" ref="description" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
