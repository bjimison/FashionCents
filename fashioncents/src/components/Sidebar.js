import React, {Component} from 'react';

class Sidebar extends Component {

     toggle_visibility = () => {
       let e = document.getElementById('sidebar-container');
        let right_arrow = document.getElementById('right-arrow');
        let posts = document.querySelector(".posts");
       if(e.style.display == 'inline-block'){
          e.style.display = 'none';
        right_arrow.style.display = 'inline-block';
        posts.style.width = '98%';
        posts.style.margin_left = '0';
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
            <ul id="sidebar-list1">
            <li>Hats</li>
            <li>Jackets</li>
            </ul>
            <div id="arrows">
            <i id="left-arrow" className="fas fa-chevron-circle-left" onClick={this.toggle_visibility}></i>
            </div>
            <ul id="sidebar-list2">
            <li>Shirts</li>
            <li>Pants</li>
            </ul>
            </div>
        <i id="right-arrow" className="fas fa-chevron-circle-right" onClick={this.toggle_visibility}></i>
            </div>
        )}
}

export default Sidebar;