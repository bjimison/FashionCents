import React, { Component } from "react";
import Model from "../models/editPost";
import axios from "axios";

class EditPost extends Component {
  state = {
    post: {}
  };

  // post_id = this.props.match.params.post_id;

  componentDidMount = () => {
    console.log(
      "component did mount POSTID: ",
      this.props.match.params.post_id
    );
    axios
      .get(`http://localhost:4000/api/posts/${this.props.match.params.post_id}`)
      .then(res => {
        this.setState({ post: res.data });
      });
  };

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

    Model.edit(postData, postId)
      .then(res => {
        //   this.setState({ posts: { ...this.props.posts, res } });
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("edit post", this.props.match.params.post_id);
    console.log(this.state.post);
    return (
      <div>
        <h1 id="create-title">Show the world your ideas</h1>
        <form className="createForm" onSubmit={this.onSubmit}>
          <div className="form-input">
            <input
              value={this.state.post.title}
              ref="title"
              type="text"
              placeholder="Title"
            />
            <input
              value={this.state.post.category}
              ref="category"
              type="text"
              placeholder="Category"
            />
          </div>
          <div className="form-input">
            <input
              ref="img"
              type="text"
              placeholder="Paste image address here"
              value={this.state.post.img}
            />
            <input
              ref="upvotes_required"
              type="text"
              placeholder="Enter the number of Upvotes desired to Create"
              value={this.state.post.upvotes_required}
            />
          </div>
          <div className="form-text">
            <textarea
              placeholder="Description"
              ref="description"
              value={this.state.post.description}
            />
            <input className="button" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditPost;
