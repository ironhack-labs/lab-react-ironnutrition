import { useState } from 'react';

function Search({ setFood, setInput, input }) {
  const searchFunction = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={searchFunction} />
    </div>
  );
}

export default Search;
