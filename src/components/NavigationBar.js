import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class NavigationBar extends Component {
     
    render() { 
        return (
            <div>
                <div id="nav-bar-links">
                    <Link to="/">Home</Link>
                    {this.props.currentUser ? <Link to={"/catalog?user=" + this.props.currentUser.name}>Catalog</Link> : ""}
                </div>
                <div id='logo'>REFLIX</div>
            </div>
        );
    }
}
 
export default NavigationBar;