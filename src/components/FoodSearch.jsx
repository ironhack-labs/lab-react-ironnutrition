import { useState } from "react";

function FoodSearch({ handleSearch }) {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    handleSearch(searchTerm);
  }

  return (
    <div>
      <label htmlFor="search">search</label>
      <input
        id="search"
        name="search"
        value={search}
        type="text"
        placeholder="enter search"
        onChange={handleChange}
      />
    </div>
  );
}

export default FoodSearch;
