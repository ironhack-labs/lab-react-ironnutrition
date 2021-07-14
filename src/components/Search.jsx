import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { onSearch } = this.props;

        return (
            <div className="mb-5">
                <h1 className="is-size-4">Search</h1>
                <input onChange={onSearch} className="input is-link has-text-centered" autoComplete="off" type="text" placeholder="Search" name="search"></input>
            </div>
        )
    }
}

export default Search;