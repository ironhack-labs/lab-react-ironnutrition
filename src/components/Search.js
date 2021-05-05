import React from 'react';
import { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleInputChange(e) {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        // Computed property names
        this.setState({ [name]: value })
        this.handleSubmitSearch()
    }

    handleSubmitSearch() {
        const searchBar = this.state
        this.props.search(searchBar)
    }

    render() {
        return (
            <label>
                Search <input type="text" name="search" value={this.state.name} onChange={e => this.handleInputChange(e)} />
            </label>)
    }


}

export default Search