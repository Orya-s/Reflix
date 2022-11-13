import React, { Component } from 'react';
import Movie from './Movie';
// import '../styles/rented.css'

class Rented extends Component {

    getRented = () => {
        const movies = this.props.movies
        return movies.map(m => <Movie movie={m} key={m.title + m.year} rent={this.props.rent}/>)
    }
    
    render() { 
        return ( 
            <div>
                <h4>Rented</h4>
                {this.getRented()}
            </div> 
        );
    }
}
 
export default Rented;