import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import ShowPost from "./ShowPost";
import Shirt from "../images/shirt.jpg";
import DeletePost from "../models/deletePost";

class Post extends Component {
  delete = event => {
    console.log("post_title", event.target.value);
    DeletePost.delete(event.target.value).then(res => {
      this.setState({
        deleted: this.state.deleted.push(res)
      });
    });
  };

  render() {
    let username = localStorage.getItem("username");
    console.log("username", username, this.props.post.username);

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

          {username === this.props.post.username
            ? console.log(
                "username: ",
                username,
                "post.username: ",
                this.props.post.username
              )`<button onClick={this.delete} value={this.props.post.title}>
              Delete
            </button>`
            : null}
        </div>
        <div className="up-arrow">
          <i className="fas fa-sort-up" />
        </div>
      </div>
    );
  }
}

export default Post;
