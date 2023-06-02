function Search({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="form-search">
      <label>
        Search Foods
        <input type="text" value={search} onChange={handleSearch} />
      </label>
    </div>
  );
}

export default Search;
