import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import Delete from "./models/deletePost";
import Posts from "./components/Posts";
import Model from "./models/getPostByCategory";



class App extends Component {
  state = {
    username: "",
    userId: "",
    auth: false,
    posts: [],
    post_category: "",
    search:'',
    searchList:null
  };

getAllPosts = () => {
  axios.get("http://localhost:4000/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
}

  componentDidMount = () => {
    this.getAllPosts();

    if (localStorage.getItem("username")) {
      this.setState({
        auth: true,
        username: localStorage.getItem("username")
      });
    }
  };

  addPost = newPost => {
    let posts = this.state.posts;
    posts.push(newPost);
    this.setState({ posts: posts });
  };

  editPost = updatedPost => {
    let posts = this.state.posts;
    var index = posts.findIndex(p => p._id === updatedPost._id);
    posts[index] = updatedPost;
    console.log('in edit Post', posts);
    this.setState({
      posts: posts
    })
  }

  deletePost = post_id => {
    Delete.delete(post_id).then(res => {
      let posts = this.state.posts;
      posts.map((post, index) => {
        if (post._id === res.data._id) {
          posts.splice(index, 1);
        }
      });

      this.setState({
        posts: posts
      });
      this.props.history.push('/')
    });
  };

  setAuth = (username, userId) => {
    this.setState({
      auth: true,
      username: username,
      userId: userId,
    });
  };

  logout = () => {
    if (localStorage.getItem("username") !== null) {
      localStorage.removeItem("username");
      
    }
    this.setState({
      auth: false,
      username: "",
      password: ""
    });
    this.props.history.push("/");
  };

  search = (event) => {
    this.setState({searchList: this.state.posts})
    let tempArr = [];

    if(event.target.value){
      tempArr = this.state.posts.filter(ele => ele.title.toLowerCase().includes(event.target.value.toLowerCase()))
      this.setState({
        searchList: tempArr,
        search: event.target.value
      })
    }
    else{
      this.setState({
        searchList: null,
        search: event.target.value
      })
    }
}

  categorySelect = event => {
      let post_category = event.target.id.toLowerCase();
      console.log(post_category)
      Model.getCategory(post_category)
       .then(res => {
         console.log('Category res', res)
         res = res.data
        this.setState({ posts: res });
      });
  }

  render() {
    // let username = localStorage.getItem("username");
    return (
      <div className="App">
        <Navbar
          auth={this.state.auth}
          username={this.state.username}
          setAuth={this.setAuth}
          logout={this.logout}
        />
        <input id="search-box" type="text" placeholder="Search" value={this.state.search} onChange={this.search}/>
        <Switch>
          <Route
            path="/createpost"
            render={props => <CreatePost addPost={this.addPost} {...props} />}
          />
          {/* <Route render={() => <Sidebar categorySelect={this.categorySelect} />} /> */}
          <Route path="/user/:username" render={props => <Profile {...props} />} />
          <Route path="/showpost/:post_id" 
            render={
              props => (<ShowPost deletePost={this.deletePost} {...props}/>)}/>
          <Route path="/editpost/:post_id" component={Post} />
          <Route path="/posts/:post_category" component={Posts} />
          <Route
            exact
            path="/"
            render={props => (
              <Posts
                getAllPosts={this.getAllPosts}
                delete={this.deletePost}
                posts={this.state.searchList?this.state.searchList:this.state.posts}
                username={this.state.username}
                editPost={this.editPost}
                search={this.search}
                categorySelect={this.categorySelect}
                {...props}
              />
            )}
          />
          <Route path="/*" render={() => <div>Error 404</div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
