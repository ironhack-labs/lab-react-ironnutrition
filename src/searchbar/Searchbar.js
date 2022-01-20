import React, { useState, useEffect } from 'react';

const Searchbar = ({ setSearchName }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearchName(search);
  }, [search, setSearchName]);

  return (
    <input
      className="input mb-5"
      type="text"
      name="search"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbar;
