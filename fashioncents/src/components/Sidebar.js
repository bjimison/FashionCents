import React, {Component} from 'react';

class Sidebar extends Component {
    render(){
        return(<div id="sidebar-container">
            <ul id="sidebar-list1">
            <li>Hats</li>
            <li>Jackets</li>
            </ul>
            <i class="fas fa-chevron-circle-left"></i>
            <ul id="sidebar-list2">
            <li>Shirts</li>
            <li>Pants</li>
            </ul>
            </div>)
    }
}

export default Sidebar;