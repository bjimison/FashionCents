import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeletePost from "../models/deletePost";
import EditPost from "./EditPost";
import { Switch, Route, withRouter } from "react-router-dom";

class Post extends Component {
  // state = {
  //   post: ""
  // };

  render() {
    let username = localStorage.getItem("username");
    let post = this.props.post;
    // this.setState({ post });
    // console.log(this.state.post);
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
            <button onClick={() => this.props.delete(post._id)}>Delete</button>
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
        <Switch>
          <Route
            path={`/editpost/${post._id}`}
            render={() => <EditPost post={this.state.post} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Post;
