import React, { useState } from 'react';

function SearchFood(props) {
  const [searchTip, setSearchTip] = useState('');

  const handleSearch = (event) => {
    setSearchTip(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="">Search Food</label>
      <input type="text" onChange={handleSearch} value={searchTip} />
    </div>
  );
}

export default SearchFood;
