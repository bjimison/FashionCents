import React, { Component } from "react";
import Model from "../models/profile";

class Profile extends Component {
  // componentDidMount() {
  //   console.log("component did mount");
  //   let username;
  //   if (localStorage.getItem("username") === null) {
  //     return this.props.history.push("/");
  //   } else {
  //     username = localStorage.getItem("username");
  //   }

  //   let user_id = 
  //   Model.profile(user_id).then(res => {
  //     // console.log("profile response", res.data);
  //     this.setState({
  //       user_id: res.data._id
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    );
  }
}

export default Profile;
