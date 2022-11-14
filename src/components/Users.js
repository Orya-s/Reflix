import React, { Component } from 'react';
import User from './User';


class Users extends Component {
    
    render() { 
        const users = this.props.users
        return (
            <div id='users-container'>
                {users.map((u,idx) => <User user={u} key={idx} updateCurrentUser={this.props.updateCurrentUser}/>)}
            </div>
        );
    }
}
 
export default Users;