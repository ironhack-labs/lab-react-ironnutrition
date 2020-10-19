import React from 'react';

function Search(props) {
  return (
    <div className="input-group input-group-lg mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fa fa-search" aria-hidden="true" />
        </span>
      </div>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search for a food!"
        onKeyUp={(event) => props.handleSearch(event.currentTarget.value)}
      />
    </div>
  );
}

export default Search;
