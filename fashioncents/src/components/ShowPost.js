import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Shirt from "../images/shirt.jpg";

class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="post-detail">
          <h3 id="title">Post 1</h3>
          <h5 id="category">Category</h5>
        </div>
        <div className="post-detail">
          <h5 id="creator">Created By</h5>
          <h5 id="upvotes">Upvotes needed for production</h5>
        </div>
        <div className="post-description">
          <img src={Shirt} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique sem augue, et auctor nisl luctus ut. Nam blandit sit amet
            tellus ut rhoncus. Donec ut sollicitudin metus. Suspendisse laoreet
            vulputate sapien, in dapibus tellus pharetra hendrerit. Ut non
            imperdiet eros. Aenean porttitor ullamcorper imperdiet. Vivamus vel
            interdum ipsum, eu ullamcorper libero. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
            mi enim, pulvinar vel erat sit amet, laoreet gravida eros.
          </p>
          <div className="up-arrow">
            <i className="fas fa-sort-up" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
