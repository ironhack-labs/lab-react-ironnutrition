import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search foods..."
      />


    </div>
  );
};

export default Search;