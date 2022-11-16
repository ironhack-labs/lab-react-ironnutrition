import { Divider } from 'antd';
import { useState } from 'react';

function Searchbar({ filterFood }) {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterFood(e.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>

      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default Searchbar;