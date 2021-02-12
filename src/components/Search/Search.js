import React, { useState } from 'react';
const Search = ({ func, reset }) => {
  const [inputInfo, setSearch] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch((state) => value);
    func(value);
  };

  return (
    <input
      type="text"
      name="search"
      value={inputInfo}
      onChange={handleChange}
    />
  );
};

export default Search;
