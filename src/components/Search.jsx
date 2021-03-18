import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class Search extends Component {

    render() {
        const {search, onSearchValue} = this.props;
        return (
            <div>
                <input 
                    onChange={(event) => onSearchValue(event.target.value)}
                    value={search}
                    name="searchValue" 
                    id="searchValue" 
                    type="text" 
                    placeholder="search..."
                />
            </div>
        )
    }
}

export default Search
