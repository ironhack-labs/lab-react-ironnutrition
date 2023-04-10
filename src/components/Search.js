import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = ({ refreshFoodList }) => {
  const [searchText, setSearchText] = useState('');

  console.log('Search =', searchText);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    refreshFoodList(e.target.value);
  };
  return (
    <>
      <Divider>
        <h2>Search</h2>
      </Divider>
      <Input
        style={{
          width: '500px',
          margin: '0 auto',
        }}
        value={searchText}
        id="search"
        type="search"
        placeholder="Search for food"
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
