import React, { Component } from "react";

import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    post: "",
    isEditing: false
  };

  // onClick = (event) => {
  //   event.preventDefault();
  // };

  render() {
    let username = localStorage.getItem("username");
    let post = this.state.post;
    let form;
    if (this.state.isEditing && this.state.post) {
      form = (
        <form className="createForm" onSubmit={this.props.onSubmit}>
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
      );
    } else {
      form = <div>Still rendering</div>;
    }
    // ###########################################################################

    if (this.state.isEditing && this.state.post) {
      post = this.state.post;
      return (
        <div>
          <h1 id="create-title">Show the world your ideas</h1>
          {form}
        </div>
      );
    } else {
      return (
        <div key={this.props.post._id} className="post-item">
          <img src={this.props.post.img} />
          <div className="post-detail">
            <p>{this.props.post.title}</p>
            <button onClick={this.props.fetchPosts} value={this.props.value}>
              <Link className="link" to={`/showpost/${post._id}`}>
                View Post
              </Link>
            </button>

            {username === this.props.post.username ? (
              <button onClick={() => this.props.delete(post._id)}>
                Delete
              </button>
            ) : null}
            {username === this.props.post.username ? (
              <button onClick={this.props.editPost} value={this.props.value}>
                {/*<Link className="link" to={`/editpost/${post._id}`}>*/}
                Edit
                {/* </Link>*/}
              </button>
            ) : null}
          </div>
          <div className="up-arrow">
            <i className="fas fa-sort-up" />
          </div>
        </div>
      );
    }
  }
}

export default Post;
