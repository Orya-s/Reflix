import React, { Component } from 'react';
import Users from './Users';
import '../styles/home.css'

class Home extends Component {

    render() {
        return (    
            <div>
                <h1>WHO'S WATCHING?</h1>
                <Users users={this.props.users} updateCurrentUser={this.props.updateCurrentUser} />
            </div>
        );
    }
}

export default Home;