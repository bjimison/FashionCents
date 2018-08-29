import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../models/editPost";

class EditPost extends Component {
  onSubmit = event => {
    event.preventDefault();
    let username = localStorage.getItem("username");
    let postId = this.props.match.params.post_id;
    let postData = {
      title: this.refs.title.value,
      category: this.refs.category.value,
      img: this.refs.img.value,
      description: this.refs.description.value,
      upvotes_required: parseInt(this.refs.upvotes_required.value),
      username: username
    };

    // console.log(postData);
    Model.edit(postData, postId)
      .then(res => {
        //   if (res.status === 404) {
        //     console.log("request to create post failed");
        //   }
        //   res = res.data;
        //   this.setState({ posts: { ...this.props.posts, res } });
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
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
