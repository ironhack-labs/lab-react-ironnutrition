import React, { Component } from 'react';

class Search extends Component {
    state= {
        input: ''
    }

    handleSearch = (event) => {
        // pass the input value to the app.js component so that
        // we can filter the foods array
        this.props.filteredFood(event.target.value);
        this.setState({input: event.target.value})
    }

    render() {
        return (
            <div>
            <input 
            type="text"
            className="input"
            onChange={this.handleSearch}
            placeholder="search..." 
            value={this.state.input}
            />
            </div>
        )
    }
}

export default Search;