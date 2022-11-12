import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import '../styles/movieInfo.css'


class MovieInfo extends Component {
    
    render() { 
        const movieId = this.props.match.params.id
        const movie = this.props.movies.find(m => m.id == movieId) 

        return ( 
            <div className='movie-info'> 
                <h3 className='movie-title'>{movie.title} ({movie.year})</h3>
                {/* <Card.Img src={movie.img} className='img'></Card.Img> */}
                <img src={movie.img} className='img'></img>
                <div className='movie-description'>{movie.descrShort}</div>
            </div>
        );
    }
}
 
export default MovieInfo;