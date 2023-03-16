import React from 'react';
import './index.css'

const Search = ({ handleSearch, search }) => {
  const onChange = (event) => {
    search = event.target.value
    handleSearch(search)
  }

  return (
    <div className='Search'>
      <form>
        <input id='search' name='search' value={search} onChange={onChange} className='w-50' placeholder='Search food'></input>
      </form>
    </div>
  );
};

export default Search;