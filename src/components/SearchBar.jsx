function SearchBar({searchValue, setSearchValue}) {


 
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearchChange} value={searchValue} type="text" />

    </div>
  );
}

export default SearchBar;
