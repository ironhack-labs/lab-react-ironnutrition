import React from 'react';

const Search = (props) => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Find a food"
          onChange={props.handleSearch}
          style={{ width: '500px' }}
        />
      </div>
    </div>
  );
};

export default Search;
