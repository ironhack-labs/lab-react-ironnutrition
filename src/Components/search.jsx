import { useState } from 'react';

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
