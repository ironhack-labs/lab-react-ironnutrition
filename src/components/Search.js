import React from 'react';

function Search(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onKeyUp={(event) => props.handleSearch(event.currentTarget.value)}
      />
      <div className="input-group-append">
        <i className="fa fa-search" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Search;