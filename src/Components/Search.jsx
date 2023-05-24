import { useState } from 'react';

function Search(props) {
  const [firstLetter, setFirstLetter] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    props.filterFoods(e.target.value);
  };

  return (
    <div className="filter-foods">
      <label>Search foods</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default Search;
