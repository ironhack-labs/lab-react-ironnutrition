import { useState } from 'react';
import Foodbox from './Foodbox';

function Search(props) {
  const handleInputChange = (event) => {
    props.setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search food"
        value={props.query}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

export default Search;
