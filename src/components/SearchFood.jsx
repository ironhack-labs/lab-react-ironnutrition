import React, { useState } from 'react';

function SearchFood(props) {
  const [searchTip, setSearchTip] = useState('');

  const handleSearch = (event) => {
    setSearchTip(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor=""></label>
      <input className='inputSearch' type="text" onChange={handleSearch} value={searchTip} />
    </div>
  );
}

export default SearchFood;
