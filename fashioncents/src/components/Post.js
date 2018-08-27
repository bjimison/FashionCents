import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "./ShowPost";
import Shirt from "../images/shirt.jpg";

class Posts extends Component {
  render() {
    return (
      <div className="homepage-post">
        <img src={Shirt} />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            luctus mollis ex a molestie. Suspendisse et tellus non lorem
            sagittis placerat. Nulla faucibus imperdiet cursus. Mauris erat
            nisi, dignissim nec urna vitae, gravida ultrices elit. Maecenas
            tempor, turpis at commodo molestie, lectus metus convallis turpis,
            non rutrum velit ante et.
          </p>
          <button>
            <Link className="link" to="ShowPost">
              View Post
            </Link>
          </button>
        </div>
        <div className="up-arrow">
          <i className="fas fa-sort-up" />
        </div>
      </div>
    );
  }
}

export default Posts;
