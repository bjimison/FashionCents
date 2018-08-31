import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  render() {
    // console.log("posts", this.props.posts);
    // let posts = this.props.posts.map(post => {
    //   return <Post key={post._id} post={post} delete={this.props.delete} />;
    // });

    return (
      <div>
        <div className="posts">{posts}</div>
        <Post posts={this.props.posts} />
      </div>
    );
  }
}

export default Posts;
