import React, { Component } from 'react'


export class SearchBar extends Component {


    handleSearch = (event) => {    
        const value = event.target.value
        this.props.search(value)
    }
    
    render() {

        return (
                <div className="search-bar">

                <h2>Search here</h2>
                <input onChange={this.handleSearch} type="text" name="search" id="search"/>
                </div>
        )
    }
}

export default SearchBar
