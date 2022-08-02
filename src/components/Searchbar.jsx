import React, { useState } from 'react';

function Searchbar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    //this handles the input state
    setSearch(e.target.value);

    //this passes the state up to movieList
    searchFilter(e.target.value);
  };
  return (
    <div className='row'>
      <br/>
      <label className='col-25' htmlFor="search">Search Foods</label>
      <input className='col-50' type="text" placeholder="Search the site…" name="search" value={search} onChange={handleSearch} />
      <br/>
    </div>

  );
}

export default Searchbar;