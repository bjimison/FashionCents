import React, { Component } from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";


class Posts extends Component {
  state = {
    post: "",
    search:''
  };
 
  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({search: event.target.value})
    if(event.target.value.length > 2){
      this.props.search(event.target.value);
    }
  }

  render() {
    console.log('Posts ', this.props.posts)
    let posts = this.props.posts.map(post => {
      return (
        <Post
          onSubmit={this.onSubmit}
          fetchPosts={this.fetchPosts}
          editPost={this.props.editPost}
          key={post._id}
          post={post}
          delete={this.props.delete}
        />
      );
    });

    return (
      <div>
      <Sidebar getAllPosts={this.props.getAllPosts} categorySelect={this.props.categorySelect} posts={this.props.posts} />
      <div id="main-content">
        <div id="search">
          <input type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearch}/>
          {this.props.username ? (
            <button>
              <Link className="link" to="/createpost">
                Post Your Creation
              </Link>
            </button>
          ) : null}
        </div>
        <div>
          <div className="posts">{posts}</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Posts;
