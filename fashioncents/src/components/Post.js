import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "./ShowPost";
import Shirt from "../images/shirt.jpg";

class Post extends Component {
  // state = {
  //   posts: [],
  //   delete: this.props.delete,
  //   deleted: []
  // };

  delete = () => {};

  render() {
    let username = localStorage.getItem("username");
    console.log("username", username, this.props.post.username);
    // console.log(this.props.posts);
    // let post = this.props.posts.forEach(post => {
    //   if (post.username === username) {
    //     return post;
    //   }
    // });
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

          {username === this.props.post.username ? (
            <button onClick={this.delete} value={this.props.post.title}>
              Delete
            </button>
          ) : null}
        </div>
        <div className="up-arrow">
          <i className="fas fa-sort-up" />
        </div>
      </div>
    );
  }
}

export default Post;
