import React,  { useState } from 'react'

function SearchBar({searchRecipes}) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchRecipes(e.target.value);
      };

  return (
    <div>
        <h2>Search Recipes</h2>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  )
}

export default SearchBar