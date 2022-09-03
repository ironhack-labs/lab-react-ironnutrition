function SearchBar({ setSearch, search }){

  const handleSearch = event => setSearch(event.target.value)

  return (
    <div className="search-bar my-5">
      <div className="mb-3">
          <h2 className="form-label text-center">Search</h2>
          <input value={search} type="text" className="form-control" placeholder="Search..." onChange={handleSearch}/>
        </div>
    </div>
  );
}

export default SearchBar;