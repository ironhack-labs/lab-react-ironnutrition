import { useState } from 'react';

function Search({ setFood, setInput, input }) {
  const searchFunction = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className='searchdiv'>
      <h2>Search</h2>
      <div className='inputdiv'>
        <label>Search: </label>
        <input type="text" value={input} onChange={searchFunction} />
      </div>

    </div>
  );
}

export default Search;
