import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CatalogHeader from './CatalogHeader'
import '../styles/catalog.css'

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            budget: 0,
            searchInput: ""
        }
    }

    getUser = () => {
        const queryString = require('query-string');
        console.log(this.props);
        const queryParams = queryString.parse(this.props.location.search);
        const userName =  queryParams.user
        return this.props.state.users.filter(u => u.name === userName)
    }

    updateSearch = input => {
        this.setState({searchInput: input})
        console.log(input);
    }

    updateBudget = budget => {
        this.setState({budget: budget})
    }



    render() {
        const user = this.getUser()


        return (
            <div>
               <CatalogHeader user={user} updateSearch={this.updateSearch} updateBudget={this.updateBudget}/>
               <h2>Catalog</h2>

            </div>
        );
    }
}

export default Catalog;