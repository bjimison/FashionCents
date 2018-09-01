import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post._id} post={post} delete={this.props.delete} />;
    });

    return (
      <div>
        <div id="search">
          <input type="text" placeholder="Search" />
          {this.props.username ? (
            <button>
              <Link className="link" to="/createpost">
                Post Your Creation
              </Link>
            </button>
          ) : null}
        </div>
        <div>
          <div className="posts">{posts}</div>
        </div>
      </div>
    );
  }
}

export default Posts;
