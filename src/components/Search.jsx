import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ foods, onSearch }) {
  const [searchText, setSearchText] = useState('');


  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchText)
    );

    onSearch(filteredFoods);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        value={searchText}
        type="text"
        onChange={handleSearch}
        placeholder="Enter search text"
      />
    </>
  );
}

export default Search;