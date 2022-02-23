import React from 'react';

export default function Search(props) {
  return (
    <div>
      <label>
        Search:
        <input onKeyUp={props.handleSearch} type="text" name="search" />
      </label>
      <input type="submit" value="Submit" />
    </div>
  );
}
