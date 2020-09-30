import React, { Component } from 'react';

class SearchBar extends Component {

    handleSearch = e => {

        this.props.searchFood(e.target.value)
    }

    render() {

        return (

            < input className="input searcher" type="text" placeholder='Buscador' onChange={this.handleSearch} />
        )
    }

}

export default SearchBar;