import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/catalog.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Movies extends Component {
    
    getColumnsForRow = () => {
        let movies = this.props.movies

        let searchInput = this.props.searchInput.toLowerCase()
        if(searchInput !== "") {
            movies = movies.filter(m => m.title.toLowerCase().includes(searchInput))
        }
        return movies.map(m => <Movie movie={m} key={m.title + m.year} rent={this.props.updateRent}/>)
    }
 
    render() { 
        return (
            <div>
                <h4>Catalog</h4>
                <Container>
                        <Row xs={3} md={this.props.columnsPerRow}>
                            {this.getColumnsForRow()}
                        </Row>
                    </Container> 
            </div> 
        );
    }
}
 
export default Movies;