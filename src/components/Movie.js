import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { IconButton } from '@mui/material';
// import Icon from '@mui/material/Icon';
import '../styles/catalog.css'



class Movie extends Component {

    updateRent = () => {
        this.props.rent(this.props.movie)
    }
    
    render() { 
        const movie = this.props.movie 

        return ( 

            <Col>
                <Link to={"/movie/" + movie.id}>
                    <div className='card-container'>
                        <Card.Img src={movie.img} className='movie-img'></Card.Img>
                        <button className='rent-movie-btn' style={{color:'white'}} onClick={(e) => 
                            {
                                this.updateRent()
                                e.preventDefault();
                            }}>{movie.isRented ? "-" : "+"}</button>
                        {/* <Icon>add_circle</Icon> */}
                    </div>
                </Link>
            </Col>
        );
    }
}
 
export default Movie;