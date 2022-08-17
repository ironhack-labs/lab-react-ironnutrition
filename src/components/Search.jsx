import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search(props) {
  const { searchResults } = props;
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    searchResults(e.target.value);
  };

  return (
    <div>
      <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={query} type="text" onChange={handleQuery} />
      </>
    </div>
  );
}

export default Search;
