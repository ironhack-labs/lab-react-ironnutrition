import React from 'react';

const Searchbar = (props) => {
  const changeHandler = (event) => {
    const input = event.target.value;
    props.onSearchInput(input);
  };
  return (
    <div className="searchbar">
      <h4>search by name:</h4>
      <input onChange={changeHandler} type="text"></input>
    </div>
  );
};

export default Searchbar;
