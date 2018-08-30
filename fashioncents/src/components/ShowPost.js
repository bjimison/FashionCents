import React, { Component } from "react";
import Model from "../models/deletePost";
import GetModel from "../models/getPost";

class ShowPost extends Component {
  state = {
    title: "",
    category: "",
    description: "",
    creator: "",
    upvotes_required: "",
    img: "",
    username: ""
  };

  handleClick = event => {
    let title = event.target.title;
    Model.delete(title).then(res => {
      this.setState({
        deleted: this.state.deleted.push(res)
      });
      console.log("in handle click for delete post button: ", res);
    });
  };

  componentDidMount = () => {
    // let username = localStorage.getItem("username");
    let postId = this.props.match.params.post_id;
    // let postId = req.params._id;
    GetModel.getOne(postId)
      .then(res => {
        this.setState({
          title: res.title,
          category: res.category,
          description: res.description,
          creator: res.creator,
          upvotes_required: res.upvotes_required,
          img: res.img,
          username: res.username
        });
        console.log("SHOWPOST: ", res);
      })
      .catch(err => console.log(err));
    this.props.history.push("/showpost/:post_id");
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-detail-show">
          <h3 id="title">{this.state.title}</h3>
          <h5 id="category">{this.state.category}</h5>
        </div>
        <div className="post-detail-show">
          <h5 id="creator">{this.state.creator}</h5>
          <h5 id="upvotes">{this.state.upvotes_required}</h5>
        </div>
        <div className="post-description-show">
          <img src={this.state.img} />
          <p>{this.state.description}</p>
          <div className="up-arrow">
            <i className="fas fa-sort-up" />
          </div>
          <button onClick={this.handleClick}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ShowPost;
