import React, { Component } from 'react';
import CatalogHeader from './CatalogHeader'
import Rented from './Rented';
import Movie from './Movie';
import '../styles/catalog.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            budget: 0,
            searchInput: "",
            columnsPerRow: 6
        }
    }

    getUser = () => {
        const queryString = require('query-string');
        const queryParams = queryString.parse(this.props.location.search);
        const userName =  queryParams.user
        return this.props.state.users.find(u => u.name === userName)
    }

    updateSearch = input => {
        this.setState({searchInput: input})
    }

    updateBudget = budget => {
        this.setState({budget: budget})
    }

    getRented = () => {
        if(this.props.state.rented > 0) {
            const movies = this.props.state.movies
            const rented = movies.filter(m => m.isRented)
            return <Rented movies={rented} rent={this.updateRent}/>
        }
    }

    getColumnsForRow = () => {
        let movies = this.props.state.movies

        let searchInput = this.state.searchInput.toLowerCase()
        if(searchInput !== "") {
            movies = movies.filter(m => m.title.toLowerCase().includes(searchInput))
        }
        return movies.map(m => <Movie movie={m} key={m.title + m.year} rent={this.updateRent}/>)
    }

    updateRent = movie => {
        if(movie.isRented) {
            this.returnMovie(movie)
        }
        else {
            this.rentMovie(movie)
        }
    }

    returnMovie = movie => {
        let user = this.getUser()
        this.props.updateRent(movie, false)
        this.props.updateBudget(user, false)
    }

    rentMovie = movie => {
        if (this.canRent(this.getUser())) {
            let user = this.getUser()
            this.props.updateRent(movie, true)
            this.props.updateBudget(user, true)
        }
    }

    canRent = user => {
        if(user.budget - 3 < 0) {
            alert("Your budget is not enough to rent a movie, sorry!")
            return false
        }
        return true
    }



    render() {
        const user = this.getUser()
        let budget = user.budget

        return (
            <div>
               <CatalogHeader user={user} updateSearch={this.updateSearch} budget={budget}/>
               <div>{this.getRented()}</div>
                
               <h4>Catalog</h4>
               <Container>
                    <Row xs={3} md={this.state.columnsPerRow}>
                        {this.getColumnsForRow()}
                    </Row>
                </Container>  
            </div>
        );
    }
}

export default Catalog;