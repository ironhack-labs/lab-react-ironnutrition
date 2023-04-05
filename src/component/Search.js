import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = useState('');

  const filterArray = (e) => {
    setSearchValue(e.target.value);
    props.searchFilter(searchValue);
  };
  //   console.log(searchValue);

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      {/* {searchValue} */}
      <Input
        value={searchValue}
        type="text"
        onChange={(e) => {
          filterArray(e);
        }}
      />
    </>
  );
}

export default Search;
