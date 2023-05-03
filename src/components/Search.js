import { Input } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    props.filterFoods(value);
  };

  return (
    <Input
      placeholder="Search for food"
      value={query}
      onChange={handleInputChange}
      style={{ width: '100%', marginBottom: 20 }}
    />
  );
}

export default Search;
