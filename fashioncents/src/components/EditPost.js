import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../models/editPost";

class EditPost extends Component {
  onSubmit = (event, post) => {
    event.preventDefault();
    Model.edit({
      title: this.refs.title,
      category: this.refs.category,
      img: this.refs.img,
      description: this.refs.description,
      upvotes: 0,
      upvotes_required: this.refs.upvotes_required,
      username: this.props.username
    }).then(res => {
      if (res.status === 404) {
        console.log("request to create post failed");
      }
      res = res.data;
      this.setState({ posts: { ...this.props.posts, res } });
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1 id="create-title">Show the world your ideas</h1>
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
              placeholder="Enter the number of Upvotes desired to Create"
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

export default EditPost;
