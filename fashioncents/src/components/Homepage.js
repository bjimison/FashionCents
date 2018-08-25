import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import CreatePost from "./CreatePost";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <div id="search">
          <input type="text" placeholder="search" />
          <button>
            <Link className="link" to="CreatePost">
              Post Your Creation
            </Link>
          </button>
        </div>
        <div className="homepage-container">
          <div className="post">
            <h4>Title</h4>
            <img src="#" />
            Post 1
          </div>
          <div className="post">
            <h4>Title</h4>
            <img src="#" />
            Post 2
          </div>
          <div className="post">
            <h4>Title</h4>
            <img src="#" />
            Post 3
          </div>
          <div className="post">
            <h4>Title</h4>
            <img src="#" />
            Post 4
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
