import React, { useState } from 'react';
import foodsOriginal from '../foods.json';

function Search(props) {
  const [search, setState] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setState(value, searchWord(value.toLowerCase()));
  }

  function searchWord(word) {
    const newList = foodsOriginal.filter((item) => {
      return item.name.toLocaleLowerCase().indexOf(word) >= 0;
    });

    props.setSearch(newList);
  }

  return (
    <div style={{ marginBottom: '3%' }}>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
