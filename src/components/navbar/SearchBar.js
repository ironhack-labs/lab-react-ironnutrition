import React, { Component } from 'react'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    handleInputChange = e => {
        let { name, value } = e.target

        this.setState({ [name]: value})
    }

    handleSubmit = e => {
        
        e.preventDefault()

        this.props.searchFood(this.state)

    }

    render() {
        return (
            
            <form className='search-bar' onKeyUp={this.handleSubmit}>
                <input type="text" name="text" value={this.state.text} onChange={this.handleInputChange} />
            </form>
        )
    }
}

export default SearchBar








