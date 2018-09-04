import React, {Component} from 'react';

class Sidebar extends Component {
    render(){
        return(<div id="sidebar-container">
            <ul id="sidebar-list">
            <li>Hats</li>
            <li>Jackets</li>
            <li>Shirts</li>
            <li>Pants</li>
            </ul>
            </div>)
    }
}

export default Sidebar;