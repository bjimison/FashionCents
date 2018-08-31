import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import EditPost from "./components/EditPost";
import Navbar from "./components/Navbar";
import PostContainer from "./containers/PostContainer";
import axios from "axios";
import Delete from "./models/deletePost";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: false,
    posts: []
  };

  // history = createHistory(this.props);

  delete = event => {
    Delete.delete(event.target.value).then(res => {
      let posts = this.props.posts.map(post => {
        if (post._id !== res.data._id) {
          return post;
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
        <Switch>
          <Route
            path="/createpost"
            render={props => <CreatePost {...props} />}
          />
          <Route path="/profile" render={props => <Profile {...props} />} />
          <Route path="/showpost/:post_id" component={ShowPost} />
          <Route path="/editpost/:post_id" component={EditPost} />
          <Route path="/editpost/:post_id" />
          <Route
            exact
            path="/"
            render={props => <PostContainer delete={this.delete} {...props} />}
          />
          <Route path="/*" render={() => <div>Error 404</div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
