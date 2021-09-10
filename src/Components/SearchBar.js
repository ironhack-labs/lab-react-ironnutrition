import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: '400px',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  };
  console.log(keyword);
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'search food'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
