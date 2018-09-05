import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


class Sidebar extends Component {

     toggle_visibility = () => {
       let e = document.getElementById('sidebar-container');
        let right_arrow = document.getElementById('right-arrow');
        let posts = document.querySelector(".posts");
       if(e.style.display === 'inline-block'){
          e.style.display = 'none';
        right_arrow.style.display = 'inline-block';
        posts.style.width = '94%';
        posts.style.marginRight = '3%';
        posts.style.marginLeft = '3%';
      } else {
          e.style.display = 'inline-block';
          right_arrow.style.display = 'none';
          posts.style.width = '83%';
          }
    }

    render(){
        return(
            <div>
            <div id="sidebar-container">
            <ul id="sidebar-list">
                <li><span onClick={this.props.categorySelect} id="Hats" className="nav-item" to={`/posts/${this.props.post_category}`}>
                    Hats</span></li>
                <li><span onClick={this.props.categorySelect} id="Jackets" className="nav-item" to={`/posts/${this.props.post_category}`}>
                    Jackets</span></li>
                <li><span onClick={this.props.categorySelect} id="Shirts" className="nav-item" to={`/posts/${this.props.post_category}`}>
                    Shirts</span></li>
                <li><span onClick={this.props.categorySelect} id="Pants" className="nav-item" to={`/posts/${this.props.post_category}`}>
                    Pants</span></li>
                <li><span onClick={this.props.getAllPosts} id="Pants" className="nav-item" to={`/posts/${this.props.post_category}`}>
                    All</span></li>
            </ul>
            </div>
        
            <div id="arrows">
                <i id="right-arrow" className="fas fa-chevron-circle-right" onClick={this.toggle_visibility}></i>
                <i id="left-arrow" className="fas fa-chevron-circle-left" onClick={this.toggle_visibility}></i>
            </div>
        </div>
        )}
}

export default Sidebar;