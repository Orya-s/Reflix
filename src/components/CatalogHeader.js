import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CatalogHeader extends Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    updateSearch = e => {
        this.setState({search: e.target.value})
        this.props.updateSearch(this.state.search)
    } 

    render() {
        return (
            <div className='header'>
                <input className='header' id="search" placeholder='Search' value={this.state.search} onChange={this.updateSearch}/>


            </div>
        );
    }
}

export default CatalogHeader;