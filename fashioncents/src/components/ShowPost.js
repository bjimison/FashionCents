import React, { Component } from "react";
import Model from "../models/deletePost";
import GetModel from "../models/getPost";

class ShowPost extends Component {
  state = {
    post: {}
  };

  // handleClick = event => {
  //   let title = event.target.title;
  //   Model.delete(title).then(res => {
  //     this.setState({
  //       deleted: this.state.deleted.push(res)
  //     });
  //     console.log("in handle click for delete post button: ", res);
  //   });
  // };

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
          <h3 id="title">{this.state.post.title}</h3>
          <h5 id="category">{this.state.post.category}</h5>
        </div>
        <div className="post-detail-show">
          <h5 id="creator">{this.state.post.creator}</h5>
          <h5 id="upvotes">{this.state.post.upvotes_required}</h5>
        </div>
        <div className="post-description-show">
          <img src={this.state.post.img} />
          <p>{this.state.post.description}</p>
          <div id="show-up-arrow">
            <i className="fas fa-sort-up" />
          </div>
          <button onClick={()=>this.props.deletePost(this.state.post._id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ShowPost;
