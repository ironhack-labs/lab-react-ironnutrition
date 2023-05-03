import { Divider, Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

// Iteration 5
function OnSearch(props) {
    const { onSearch } = props;
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    onSearch(value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Search placeholder='Search for Food' value={search} type="text" onChange={handleInputChange} />
    </>
  );
}

export default OnSearch;


