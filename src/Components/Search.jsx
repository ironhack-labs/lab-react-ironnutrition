import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        onChange={props.filterFoodFn}
        name="search"
        className="input"
        type="text"
        placeholder="search foods"
      />
    </div>
  );
}

export default Search;
