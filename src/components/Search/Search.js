import React, { useState } from 'react';
const Search = ({ func, reset }) => {
  const [searchQuery, setSearch] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch((state) => value, func(searchQuery));
  };

  return (
    <input
      type="text"
      name="search"
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default Search;
