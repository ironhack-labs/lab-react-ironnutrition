import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ foodList, onSearch }) {
    const [searchText, setSearchText] = useState('');
  
  
    const handleSearch = (e) => {
      const searchText = e.target.value.toLowerCase();
      setSearchText(searchText);
  
      const filteredFoods = foodList.filter((food) =>
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