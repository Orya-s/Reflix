import React, { Component } from 'react';

class CatalogHeader extends Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    updateSearch = e => {
        this.setState({search: e.target.value})
        this.props.updateSearch(e.target.value)
    } 

    render() {
        return (
            <div >
                <div className='header'>
                    <input className='search-bar' id="search" placeholder='Search' value={this.state.search} onChange={this.updateSearch}/>
                    <div className='budget'>Budget:   {this.props.budget}</div>
                </div>
            </div>
        );
    }
}

export default CatalogHeader;