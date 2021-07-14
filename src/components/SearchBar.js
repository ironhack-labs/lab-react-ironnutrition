import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }


    handleInputChange = (e) => {
        this.setState({
            query: e.currentTarget.value
        })
        this.props.searchFood(this.state.query)
    }


    render() {
        return (
            <input type="text" id="filter" placeholder="Search for..." onChange={(e) => this.handleInputChange(e)} />
        )
    }
}


export default SearchBar