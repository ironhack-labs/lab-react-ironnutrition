import React, { useState } from 'react';

export default function Search(props) {

  const {searchFor} = props;

  const [search, setSearch] = useState('');

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
    searchFor(search);
  }

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        name="search"
        value={search}
        onChange={handleSearchInput}
        placeholder="Search here"
      />
    </div>
  );
}
