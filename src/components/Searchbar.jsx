import { useState } from 'react';

function Searchbar(props) {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    props.filterFoods(event.target.value);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="search">Search for a food</label>
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default Searchbar;
