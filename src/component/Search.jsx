import { useState } from 'react';

function Search(props) {
  const [keyword, setKeyword] = useState('');

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleFilterFood(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Search</label>
      <input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      />
    </div>
  );
}

export default Search;