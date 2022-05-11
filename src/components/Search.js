import { useState } from 'react';
import React from 'react';

function SearchFood(props) {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    props.searchBtn(e.target.value);
  };

  return (
    <div className="AddFood">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
}

export default SearchFood;
