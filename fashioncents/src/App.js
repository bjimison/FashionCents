import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import axios from "axios";
import Delete from "./models/deletePost";
import Posts from "./components/Posts";


class App extends Component {
  state = {
    username: "",
    password: "",
    auth: false,
    posts: []
  };

  // history = createHistory(this.props);

  componentDidMount = () => {
    axios.get("http://localhost:4000/api/posts").then(res => {
      // console.log(res.data);
      this.setState({ posts: res.data });
    });
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

  setAuth = (username, password) => {
    this.setState({
      auth: true,
      username: username,
      password: password
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

  componentDidMount() {
    if (localStorage.getItem("username") !== null) {
      this.setState({
        auth: true,
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password")
      });
    }

    axios.get("http://localhost:4000/api/posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  search = (search) => {
     console.log(search)
    if(search.length > 2){
      let posts = [];
    // posts.filter(post => post.title.toLowerCase() === search.toLowerCase())
    this.state.posts.forEach(post => {
     
      if(post.title.toLowerCase() === search.toLowerCase()){
        posts.push(post)
        console.log('match',posts)
      }
    })
    // console.log(posts)
    this.setState({ posts: posts });
    }
    
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
        <Switch>
          <Route
            path="/createpost"
            render={props => <CreatePost addPost={this.addPost} {...props} />}
          />
          <Route path="/user/:user_id" render={props => <Profile {...props} />} />
          <Route path="/showpost/:post_id" 
            render={
              props => (<ShowPost deletePost={this.deletePost} {...props}/>)}/>
          <Route path="/editpost/:post_id" component={Post} />
          <Route
            exact
            path="/"
            render={props => (
              <Posts
                delete={this.deletePost}
                posts={this.state.posts}
                username={this.state.username}
                editPost={this.editPost}
                search={this.search}
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
