import React, {Component} from 'react';

class Sidebar extends Component {

    // leftClick = (event) => {
    //     event.preventDefault();
    //     let sidebar = document.getElementById('sidebar-container');
    //     sidebar.setAttribute("display", "none");
    //     document.getElementById('right-arrow').setAttribute("display" , "block");
    //     document.getElementById('left-arrow').setAttribute("display", "none");
    // }

     toggle_visibility = () => {
       let e = document.getElementById('sidebar-container');
        let right_arrow = document.getElementById('right-arrow');
        // let left_arrow = document.getElementById('left-arrow');
       if(e.style.display == 'inline-block'){
          e.style.display = 'none';
        right_arrow.style.display = 'inline-block';
        // left_arrow.style.display = 'none';
      } else {
          e.style.display = 'inline-block';
          right_arrow.style.display = 'none';
        //   left_arrow.style.display = 'inline-block';
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
            <i id="left-arrow" class="fas fa-chevron-circle-left" onClick={this.toggle_visibility}></i>
            </div>
            <ul id="sidebar-list2">
            <li>Shirts</li>
            <li>Pants</li>
            </ul>
            </div>
        <i id="right-arrow" class="fas fa-chevron-circle-right" onClick={this.toggle_visibility}></i>
            </div>
        )}
}

export default Sidebar;