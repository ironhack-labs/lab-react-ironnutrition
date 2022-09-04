function Search({ search, setSearch }) {
  return (
    <div className="mb-2">
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="form-control"
          type="text"
        />
      </div>
  );
};

export default Search;