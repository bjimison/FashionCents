import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeletePost from "../models/deletePost";

class Post extends Component {
  delete = event => {
    console.log("post_title", event.target.value);
    DeletePost.delete(event.target.value).then(res => {
      this.setState({
        deleted: this.state.deleted.push(res)
      });
    });
  };

  render() {
    let username = localStorage.getItem("username");
    let posts = this.props.posts.map(post => {
      return (
        <div key={post._id} className="post-item">
          <img src={post.img} />
          <div className="post-detail">
            <p>{post.description}</p>
            <button>
              <Link className="link" to={`/showpost/${post._id}`}>
                View Post
              </Link>
            </button>

            {username === post.username ? (
              <button onClick={this.delete} value={post.title}>
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
    });

    // console.log("username", username, this.props.post.username);
    return <div className="homepage-post">{posts}</div>;
  }
}

export default Post;
