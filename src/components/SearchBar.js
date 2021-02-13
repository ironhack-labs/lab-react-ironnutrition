import React, { Component } from 'react';

//It performs a search that updates the list.
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    handleSearchInput = (e) => {
        const value = e.target.value;
        this.setState({
            searchInput: value
        })
        this.props.filterFood(value);
    }

    render() {
        return (
            <div>
                <label>Search:</label>
                <input type="text" name="search" value={this.state.searchInput} onChange={this.handleSearchInput}></input>
            </div>
        )
    }
}

export default SearchBar;