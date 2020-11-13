import React, { useState } from 'react';
import foodsOriginal from '../foods.json';

function Search(props) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
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
