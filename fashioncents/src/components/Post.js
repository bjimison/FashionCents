import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeletePost from "../models/deletePost";

class Post extends Component {
  // delete = event => {
  //   event.preventDefault();
  //   console.log("post._id", event.target.value);
  //   DeletePost.delete(event.target.value).then(res => {
  //     if (res.status === 404) {
  //       console.log("request to create post failed");
  //     }
  //     // this.props.history.push("/");
  //   });
  // };

  render() {
    let username = localStorage.getItem("username");
    let post = this.props.post;
    console.log(post);
    return (
      <div key={post._id} className="post-item">
        <img src={post.img} />
        <div className="post-detail">
          <p>{post.title}</p>
          <button>
            <Link className="link" to={`/showpost/${post._id}`}>
              View Post
            </Link>
          </button>

          {username === post.username ? (
            <button onClick={this.props.delete(post._id)} value={post._id}>
              Delete
            </button>
          ) : null}
          {username === post.username ? (
            <button value={post.title}>
              <Link className="link" to={`/editpost/${post._id}`}>
                Edit
              </Link>
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

export default Post;
