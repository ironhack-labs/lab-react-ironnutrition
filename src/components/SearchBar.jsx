function SearchBar(props) {
  
    return (
      <header>
        <div>
            <label htmlFor="search">Search</label>
            <input type="search" id="search" name="search" placeholder="Search for product" onChange={props.searchFilter} />
        </div>
        
      </header>
    );
  }
  
  export default SearchBar;