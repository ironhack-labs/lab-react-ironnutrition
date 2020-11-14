/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import foodsOriginal from '../foods.json';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  // parametros usadoos no App.js

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value.toLowerCase());

    if (search.length <= 0) {
      props.setSearch(foodsOriginal);
    } else {
      let newList = [];
      let itemLower = '';
      foodsOriginal.map((item) =>
        (itemLower = item.name.toLowerCase()).indexOf(search) >= 0
          ? newList.push(item)
          : false
      );
      props.setSearch(newList);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
