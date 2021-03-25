import React from 'react';

const Search = ({handleSearch, search}) => {
    return (
        <div>
            <div>
                <input type="text" className="input search-bar" name="search" onChange={handleSearch} value={search} />
            </div>
        </div>)
}

export default Search;


