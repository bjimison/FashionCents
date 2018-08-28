import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "./ShowPost";
import Shirt from "../images/shirt.jpg";
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
    let posts = this.props.posts.map(post => {
      return (
        <div>
          <img src={post.img} />
          <div>
            <p>{post.description}</p>
            <button>
              <Link className="link" to="ShowPost">
                View Post
              </Link>
            </button>

            {username === post.username ? (
              <button onClick={this.delete} value={post.title}>
                Delete
              </button>
            ) : null}
          </div>
          <div className="up-arrow">
            <i className="fas fa-sort-up" />
          </div>
        </div>
      );
    });
    let username = localStorage.getItem("username");
    // console.log("username", username, this.props.post.username);
    return <div className="homepage-post">{posts}</div>;
  }
}

export default Post;
