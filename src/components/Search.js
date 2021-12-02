import React from 'react';
function Search(props) {
  return (
    <div>
      <input
        name="name"
        onChange={props.btnSearch}
        type="text"
        placeholder="Search your food"
      />
    </div>
  );
}
export default Search;
