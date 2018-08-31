import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostContainer from "../containers/PostContainer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div id="search">
          <input type="text" placeholder="Search" />
          <button>
            <Link className="link" to="/createpost">
              Post Your Creation
            </Link>
          </button>
        </div>
        <PostContainer />
      </div>
    );
  }
}

export default Homepage;
