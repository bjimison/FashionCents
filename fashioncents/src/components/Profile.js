import React, { Component } from "react";
import Model from "../models/profile";

class Profile extends Component {
  state = {
    user: ""
  }

  componentDidMount() {
    console.log("component did mount");
    let username;
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/");
    } else {
      username = localStorage.getItem("username");
    }
  

  if(username){
    Model.profile(username).then(res => {
      console.log("profile response", res.data);
      let user = res.data[0]
      this.setState({
        user
      })
      console.log("RES.DATA from Profile.js:", this.state.user)
      })
    }
  }
  

  render(){
    return (
      <div id="profile">
        <h1> Hello, {this.state.user.username}</h1>
        <h3>This is your Profile Page</h3> 
      </div>
    )
  }
}

export default Profile;
