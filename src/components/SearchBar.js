import React from 'react';

const SearchBar = ({ searchForFood }) => {
  return (
    <div className="box">
      <input
        className="input"
        type="text"
        placeholder="Text input"
        onChange={(e) => {
          searchForFood(e);
        }}
      />
    </div>
  );
};

export default SearchBar;
