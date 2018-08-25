import React, { Component } from "react";
import Model from "../models/profile";
import Homepage from "./Homepage";

class Profile extends Component {
  componentDidMount() {
    console.log("component did mount");
    let username;
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/Homepage");
    } else {
      username = localStorage.getItem("username");
    }

    Model.profile(username).then(res => {
      console.log("profile response", res.data);
      this.setState({
        username: res.data.username,
        profile_pic: res.data.profile_pic,
        email: res.data.email
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    );
  }
}

export default Profile;
