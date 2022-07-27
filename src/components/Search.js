function Search(props) {
  return (
    <div>
      <form action="/" method="get">
        <input
          type="text"
          value={props.searchQuery}
          onInput={(e) => props.setSearchQuery(e.target.value)}
          id="search-bar"
          placeholder="Search for food"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
