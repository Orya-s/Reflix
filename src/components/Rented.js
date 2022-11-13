import React, { Component } from 'react';
import Movie from './Movie';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Rented extends Component {
    constructor() {
        super()
        this.state = { 
            responsive: {
                0: {
                    items: 1
                },
                512: {
                    items: 3
                },
                1024: {
                    items: 6
                },
                2000: {
                    items: 8
                }
            }
        }
    }

    handleDragStart = (e) => e.preventDefault();

    getRented = () => {
        const movies = this.props.movies
        return movies.map(m => <Movie movie={m} key={m.id} rent={this.props.rent} onDragStart={this.handleDragStart} className='rented-movies'/>)
    }
    
    render() { 

        return ( 
            <div>
                <h4>Rented</h4>
                <AliceCarousel mouseTracking items={this.getRented()} responsive={this.state.responsive} className='rented-carousel'/>
            </div> 
        );
    }
}
 
export default Rented;