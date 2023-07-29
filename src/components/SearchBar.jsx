function SearchBar(props) {
    const {searchTerm, onSearchChange} = props
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={onSearchChange} 
        />
      </form>
      
    );
  }

export default SearchBar