import React, { Component } from 'react';
import User from './User';
import '../styles/home.css'

class Home extends Component {

    render() {
        const users = this.props.users 
        return (    
            <div>
               <h1>WHO'S WATCHING?</h1>
                <div id='users-container'>
                    {users.map(u => <User user={u} key={u.name} updateCurrentUser={this.props.updateCurrentUser}/>)}
                </div>
            </div>
        );
    }
}

export default Home;