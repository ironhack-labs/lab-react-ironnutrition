import React, { useEffect, useState } from 'react';

function Search(props) {
  let [search, setSearch] = useState('');
  //      ^-----.
  // updates search value and callsback the function from App.js
  const handleChange = (event) => {
    setSearch(search = event.currentTarget.value);
    props.handleSearch(search);
  }

  // renders the search bar
  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={search} // updates what's written in the search bar to keep control of it
        onChange={handleChange} // calls the function everytime something changes in the input
      />
    </div>
  )
}

export default Search;