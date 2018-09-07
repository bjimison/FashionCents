import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


class Sidebar extends Component {

     toggle_visibility = () => {
       let e = document.getElementById('sidebar-container');
        let right_arrow = document.getElementById('right-arrow');
        let left_arrow = document.getElementById('left-arrow');
        let posts = document.querySelector(".posts");
        let search = document.querySelector(".search");
       if(e.style.display === 'inline-block'){
          e.style.display = 'none';
        right_arrow.style.display = 'inline-block';
        left_arrow.style.display = 'none';
        search.style.marginLeft = '0';
        posts.style.width = '94%';
        posts.style.marginRight = '3%';
        posts.style.marginLeft = '3%';
      } else {
          e.style.display = 'inline-block';
          right_arrow.style.display = 'none';
          left_arrow.style.display = 'block';
          posts.style.width = '83%';
          search.style.marginLeft = '10%';
          }
    }

    render(){
        return(
            <div>
            <div id="sidebar-container">
            <ul id="sidebar-list">
                <li className="nav-item-side"><span onClick={this.props.getAllPosts} id="all" to={`/posts/${this.props.post_category}`}>
                    All</span></li>
                <li className="nav-item-side"><span onClick={this.props.categorySelect} id="hats" to={`/posts/${this.props.post_category}`}>
                    Hats</span></li>
                <li className="nav-item-side"><span onClick={this.props.categorySelect} id="jackets" to={`/posts/${this.props.post_category}`}>
                    Jackets</span></li>
                <li className="nav-item-side"><span onClick={this.props.categorySelect} id="shirts" to={`/posts/${this.props.post_category}`}>
                    Shirts</span></li>
                <li className="nav-item-side"><span onClick={this.props.categorySelect} id="pants" to={`/posts/${this.props.post_category}`}>
                    Pants</span></li>
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