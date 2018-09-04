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
    console.log("SHOWPOST_ID: ", postId);
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
      <div className="showpost-container">
        <div className="post-detail-show">
          <h3 id="title">TITLE</h3>
          <h5 id="category">CATEGORY</h5>
        </div>
        <div className="post-detail-show">
          <h5 id="creator">CREATOR</h5>
          <h5 id="upvotes">VOTES</h5>
        </div>
        <div className="post-description-show">
          <img src={this.state.img} />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div id="show-up-arrow">
            <i className="fas fa-sort-up" />
          </div>
          <button onClick={this.handleClick}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ShowPost;
