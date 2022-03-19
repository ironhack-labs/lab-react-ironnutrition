function Search(props) {
  return (
    <div className="mb-5">
      <input
        type="text"
        class="input search-bar"
        name="search"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;
