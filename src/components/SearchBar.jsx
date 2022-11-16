import { useState } from 'react';

function Searchbar(props) {
    const {filterfoods} = props 
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterfoods(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
        <label htmlFor="query"></label>
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default Searchbar;