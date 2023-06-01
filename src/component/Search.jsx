function Search({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <label>
        {' '}
        Search Foods
        <input type="text" value={search} onChange={handleSearch} />
      </label>
    </div>
  );
}

export default Search;
