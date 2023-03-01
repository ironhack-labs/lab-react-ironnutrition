import React, {useState} from 'react'

function Search({searchFoods}) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchFoods(e.target.value);
    };

  return (
    <div>
    <h2>Search Food</h2>
    <label htmlFor="search">Search:</label>
    <input type="text" name='search' value={search} onChange={handleSearch}/>
    </div>
  );
}

export default Search;