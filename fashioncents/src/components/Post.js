import React, { Component } from "react";
import Model from "../models/editPost";
import VoteModel from "../models/upvote";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    isEditing: false,
    post: "",
    title: "",
    category: "",
    img: "",
    description: "",
    upvotes_required: "",
    upvotes: ""
  };

  componentDidMount = () => {
    this.setState({
      post: this.props.post
    });
  };

  updateState = () => {
    this.setState({
      title: this.state.post.title,
      category: this.state.post.category,
      img: this.state.post.img,
      description: this.state.post.description,
      upvotes_required: parseInt(this.state.post.upvotes_required)
    });
  };

  toggleEdit = event => {
    event.preventDefault();
    this.setState({ isEditing: true });
    this.updateState();
  };

  onSubmit = event => {
    event.preventDefault();
    let username = localStorage.getItem("username");
    let postId = this.state.post._id;
    let postData = {
      title: this.state.title,
      category: this.state.category,
      img: this.state.img,
      description: this.state.description,
      upvotes_required: parseInt(this.state.upvotes_required),
      username: username
    };

    Model.edit(postData, postId)
      .then(res => {
        this.props.editPost(res.data);
        this.setState({ isEditing: false });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  voteCounter = event => {
    event.preventDefault();
    let upvotes = {
      upvotes: this.state.post.upvotes + 1
    };
    VoteModel.getVoteCount(this.state.post._id, upvotes)
      .then(res => {
        let newCount = res.data.upvotes;
        this.props.editPost(res.data);
        this.setState({
          upvotes: newCount,
          post: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    let username = localStorage.getItem("username");
    let post = this.props.post;
    let form;
    if (this.state.isEditing && this.props.post) {
      form = (
        <form className="editForm" onSubmit={this.onSubmit}>
          <div className="form-input">
            <input
              name="title"
              value={this.state.title}
              ref="title"
              type="text"
              placeholder="Title"
              onChange={this.handleChange}
            />
            <input
              name="category"
              value={this.state.category}
              ref="category"
              type="text"
              placeholder="Category"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              name="img"
              ref="img"
              type="text"
              placeholder="Paste image address here"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <input
              name="upvotes_required"
              ref="upvotes_required"
              type="text"
              placeholder="Enter the number of Upvotes desired to Create"
              value={this.state.upvotes_required}
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-form-text">
            <textarea
              id="edit-textarea"
              name="description"
              placeholder="Description"
              ref="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <input id="submit-edit" className="button" type="submit" />
        </form>
      );
    } else {
      form = <div>Still rendering</div>;
    }
    // ###########################################################################

    if (this.state.isEditing) {
      post = this.props.post;
      return (
        <div>
          <h1 id="create-title">Share your Design</h1>
          {form}
        </div>
      );
    } else {
      return (
        <div key={this.props.post._id} className="post-item">
          <img src={this.props.post.img} />
          <div className="post-detail">
            <p>{this.props.post.title}</p>
            <button
              className="view-button"
              onClick={this.props.fetchPosts}
              value={this.props.value}
            >
              <Link className="link" to={`/showpost/${post._id}`}>
                View Post
              </Link>
            </button>
            {username === this.props.post.username ? (
              <button
                className="view-button"
                onClick={() => this.props.delete(post._id)}
              >
                Delete
              </button>
            ) : null}
            {username === this.props.post.username ? (
              <button
                className="view-button"
                onClick={this.toggleEdit}
                value={this.props.value}
              >
                Edit
              </button>
            ) : null}
          </div>
          <div className="up-arrow">
            <h3 className="displayed-votes">
              {this.state.upvotes
                ? this.state.upvotes
                : this.state.post.upvotes}
            </h3>
            <i onClick={this.voteCounter} className="fas fa-sort-up" />
          </div>
        </div>
      );
    }
  }
}

export default Post;
