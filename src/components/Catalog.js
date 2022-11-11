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
            rented: 0,
            columnsPerRow: 5
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
        console.log(input);     ///////////
    }

    updateBudget = budget => {
        this.setState({budget: budget})
    }

    getRented = () => {
        if(this.state.rented > 0) {
            const movies = this.props.state.movies
            const rented = movies.filter(m => m.isRented)
            return <Rented movies={rented}/>
        }
    }

    getColumnsForRow = () => {
        const movies = this.props.state.movies
        return movies.map(m => <Movie movie={m} key={m.title + m.year}/>)
    }



    render() {
        const user = this.getUser()
        let budget = user.budget

        return (
            <div>
               <CatalogHeader user={user} updateSearch={this.updateSearch} budget={budget}/>
               <div>{this.getRented()}</div>
                

               <h2>Catalog</h2>

               <Container>
                    <Row xs={1} md={this.state.columnsPerRow}>
                        {this.getColumnsForRow()}
                    </Row>
                </Container>  
            </div>
        );
    }
}

export default Catalog;