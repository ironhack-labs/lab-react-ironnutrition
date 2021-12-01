import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget
        this.setState({
            [name]: value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.getSearch(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <label htmlFor="header-search">
                <input onChange={this.handleChange}
                    value={this.state.name}
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="name"
                /> 
                </label>
                <button type="submit">Search</button>
            </form>
    )
    }
}
export default SearchBar;