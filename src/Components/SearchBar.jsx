import React, { Component } from 'react'

export class SearchBar extends Component {

    handleSearch = (event) => {
        const searchValue = event.target.value
        this.props.stockSearchVal(searchValue)
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    type="text" 
                    placeholder="Search your product" 
                    onChange={this.handleSearch}
                    value={this.props.search}
                />
            </div>
        )
    }
}

export default SearchBar
