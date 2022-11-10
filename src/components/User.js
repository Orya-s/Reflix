import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class User extends Component {

    render() {
        const user = this.props.user
        return (    
            <Link to={"/catalog?user=" + user.name}>
                <div className='users'>
                    <img src={user.img}></img>
                    <div>{user.name}</div>
                </div>
            </Link>
        );
    }
}

export default User;