import { Divider, Input } from 'antd';
import { useState } from 'react';

function SearchFood(props) {
  const [query, setQuery] = useState('');

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={query}
        type="search"
        onChange={(e) => {
          setQuery(e.target.value);
          props.callbackToSearchFood(query);
        }}
      />
    </>
  );
}

export default SearchFood;
