//This Component is currently not used
import React, { Component } from 'react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (event) => {
        let { searchInput } = event.target;
        this.setState({ searchInput });
    }

    

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.searchInput}></input>
            </div>
        )
    }
}

export default Search;
