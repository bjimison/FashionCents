import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import axios from "axios";
import Delete from "./models/deletePost";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    username:"",
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

  deletePost = post_id => {
    Delete.delete(post_id).then(res => {
      let posts = this.state.posts;
      posts.map((post, index) => {
        console.log(index);
        if (post._id === res.data._id) {
          posts.splice(index, 1);
        }
      });

      this.setState({
        posts: posts
      });
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
    if (localStorage.getItem("username") != null) {
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
    if (localStorage.getItem("username") != null) {
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
        <Sidebar />
        <Switch>
          <Route
            path="/createpost"
            render={props => <CreatePost addPost={this.addPost} {...props} />}
          />
          <Route path="/profile" render={props => <Profile {...props} />} />
          <Route path="/showpost/:post_id" component={ShowPost} />
          <Route path="/editpost/:post_id" component={Post} />
          <Route
            exact
            path="/"
            render={props => (
              <Posts
                delete={this.deletePost}
                posts={this.state.posts}
                username={this.state.username}
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
