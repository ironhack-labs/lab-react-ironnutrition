import React, { Component } from 'react'

class SearchBar extends Component {

    handleChange = (event) => {
        const value = event.target.value
        this.props.onFilterTextChange(value)

        console.log(value)
    }

    render() {
        
        const filterText = this.props.filterText;

        return (
            <div>
                <h3>Search</h3>
            <form>
            <input onChange={this.handleChange} value={filterText} type="text" placeholder="Search..." />
            </form>
            </div>
        )
    }
}

export default SearchBar
