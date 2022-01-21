import React, { Fragment, useState } from 'react';

const Search = ({ onInput }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchFormHandler = (event) => {
    setSearchTerm(event.target.value);
    onInput(event.target.value);
  };

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={searchFormHandler}
        />
      </form>
    </Fragment>
  );
};

export default Search;
