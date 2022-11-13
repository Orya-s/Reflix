import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class User extends Component {

    updateCurrentUser = () => {
        this.props.updateCurrentUser(this.props.user)
    }

    render() {
        const user = this.props.user
        return (    
            <Link to={"/catalog?user=" + user.name} onClick={this.updateCurrentUser}>
                <div className='users'>
                    <img src={user.img} alt={user.name}></img>
                    <div>{user.name}</div>
                </div>
            </Link>
        );
    }
}

export default User;