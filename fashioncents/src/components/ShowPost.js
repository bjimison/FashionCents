import React, { Component } from "react";
import Model from "../models/deletePost";
import GetModel from "../models/getPost";

class ShowPost extends Component {
  state = {
    post: {}
  };

  componentDidMount = () => {
    // let username = localStorage.getItem("username");
    let postId = this.props.match.params.post_id;
    
    // let postId = req.params._id;
    GetModel.getOne(postId)
      .then(res => {
        this.setState({
          post: res.data
        });
      })
      .catch(err => console.log(err));
    this.props.history.push("/showpost/:post_id");
  };


  render() {
    return (
      <div className="showpost-container">
        <div className="post-detail-show">
          <h3 id="title">Title: {this.state.post.title}</h3>
          <h3 id="category">Category: {this.state.post.category}</h3>
        </div>
        <div className="post-detail-show">
          <h3 id="creator">Created By: {this.state.post.creator}</h3>
          <h3 id="upvotes">Current Upvotes: {this.state.post.upvotes}</h3>
        </div>
        <h3 id="upvotes-required">Upvotes Required for Production: {this.state.post.upvotes_required}</h3>
        <div className="post-description-show">
          <img src={this.state.post.img} />
          <p>Item Description: {this.state.post.description}</p>
          <div id="show-up-arrow">
            {/*<i className="fas fa-sort-up" />*/}
          </div>
          <button className="view-button" onClick={()=>this.props.deletePost(this.state.post._id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ShowPost;
