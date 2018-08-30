import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import PostContainer from "../containers/PostContainer";
import Navbar from "./Navbar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PostContainer />
      </div>
    );
  }
}

export default Homepage;
