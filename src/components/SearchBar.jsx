function SearchBar({ search, setSearch}) {
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
      <div className="search-bar">
        <label>
            What are you looking for?
            <input type="text" value={search} onChange={handleSearch}/>
        </label>
        
     
      </div>
    );
  }
  
  export default SearchBar;