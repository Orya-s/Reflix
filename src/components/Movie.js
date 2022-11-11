import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from "html-react-parser";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { IconButton } from '@mui/material';
// import Icon from '@mui/material/Icon';
import '../styles/catalog.css'



class Movie extends Component {
    constructor() {
        super();
    }

    rentMovie = () => {
        console.log("hi");
    }
    
    render() { 
        const movie = this.props.movie 

        return ( 

            <Col>
                <Card.Link href={movie.img} className='card-container' >
                    {/* <Button variant="outline-info" className='rent-movie' onClick={(e) => 
                        {
                            if(e.target !== e.currentTarget) {
                            } else{this.rentMovie()}
                        }}>+
                    </Button>{' '} */}
                    <Card.Img src={movie.img}></Card.Img>
                    <button className='rent-movie' style={{color:'white'}}  onClick={(e) => 
                        {
                            this.rentMovie()
                            e.preventDefault();
                        }}>+</button>{' '}
                    {/* <Icon>add_circle</Icon> */}
                </Card.Link>   

                {/* <Card.Body> */}
                    {/* <Card.Title>{(movie.name)}</Card.Title> */}
                {/* </Card.Body> */}
            </Col>
        );
    }
}
 
export default Movie;