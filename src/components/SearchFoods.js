import React, { useState } from 'react';

function SearchFoods(props) {

const [searchTerm, setSearchTerm] = useState('');

const handleSearch = event => {
    setSearchTerm(event.target.value);
    props.handleSearch(event.target.value);
}

    return(
        <div>
            <input type="text"  value={searchTerm} onChange="handleSearch" />
        </div>
    );
}

export default SearchFoods;