import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        onChange={props.onChange}
        type="text"
        name="food"
        className="input is-primary"
        value={props.value}
      ></input>
    </div>
  );
}

export default Search;
