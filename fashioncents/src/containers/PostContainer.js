import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "../components/ShowPost";

class PostContainer extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <h4>Title</h4>
          <img src="#" />
          Post 1
          <button>
            <Link className="link" to="ShowPost">
              View Post
            </Link>
          </button>
        </div>
        <div className="post">
          <h4>Title</h4>
          <img src="#" />
          Post 2
          <button>
            <Link className="link" to="ShowPost">
              View Post
            </Link>
          </button>
        </div>
        <div className="post">
          <h4>Title</h4>
          <img src="#" />
          Post 3
          <button>
            <Link className="link" to="ShowPost">
              View Post
            </Link>
          </button>
        </div>
        <div className="post">
          <h4>Title</h4>
          <img src="#" />
          Post 4
          <button>
            <Link className="link" to="ShowPost">
              View Post
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default PostContainer;
