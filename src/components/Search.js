function Search(props) {

    return(

    <form>
      <label>
          Search:
          <input 
            type="text" 
            name="searchQuery" 
            placeholder="search food" 
            value={props.searchQuery}
            onChange={(e) => { props.setSearchQuery(e.target.value) }} 
            />
      </label>
    </form>

    )
}

export default Search;